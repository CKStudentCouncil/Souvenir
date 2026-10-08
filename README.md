# CKSC Online Souvenir

CKSC Online Souvenir is the official Quasar/Vue 3 storefront for the Taipei Municipal Chien Kuo High School Student Council's souvenir campaign.

The application allows visitors to browse merchandise, place orders, and track their orders. Authorized managers and administrators can review orders, update payment and delivery status, and send customer notifications.

## Highlights

- Product catalog with size-based variants for jackets, shorts, caps, and other merchandise
- Shopping cart and checkout flow for customer orders
- Order lookup and order history pages for buyers
- Role-based administration for managers, admins, and super admins
- Firebase-backed authentication and Firestore data storage, protected by `firestore.rules`
- Prices and discounts re-checked on the server for every order
- Automated order confirmation emails and bulk notification emails through Cloud Functions
- Launch gate that redirects visitors to `/comingsoon` before the sale opens

## Tech Stack

### Frontend

- Vue 3
- Quasar 2
- Vue Router
- Pinia

### Backend & Services

- Firebase Authentication (Google sign-in for staff, anonymous sign-in for buyers)
- Cloud Firestore
- Google Analytics
- Firebase Hosting / GitHub Pages
- Firebase Cloud Functions
- AWS SES for email delivery

### Utility Libraries

- xlsx
- file-saver
- html2pdf.js
- qrcode

## Project Structure

```text
src/
├── pages/                 # Route-level screens such as Home, Cart, Orders, Admin, and Account
├── components/            # Product page layouts and the toast
├── layouts/               # Header, menu and footer
├── stores/                # Pinia stores: auth (staff roles), cart, toast
├── services/              # Firebase setup and order reads/writes
├── composables/           # Admin order list, filters and statistics
├── utils/                 # Order formatting, receipts, Excel export, PDF download
├── data/                  # Survey questions
└── router/                # Route definitions and navigation guards

functions/                 # Firebase Cloud Functions
├── index.js               # createOrder, sendOrderQRCode, sendOrderNotification
├── lib/                   # Order validation, email templates, SES mailer
└── shared/                # Catalog, pricing and settings used by BOTH the web app and the functions
                           #   (imported in the web app as `shared/...`)
firestore.rules            # Firestore security rules
public/                    # Static assets (product images go in public/product-<id>.png)
.github/workflows/
└── deploy.yml             # GitHub Pages deployment workflow
```

### Where to change things

| What | File |
|---|---|
| Products, prices, sizes, schools, gift rule, combo deals | `functions/shared/catalog.js` |
| Shop opening time, roles | `functions/shared/config.js` |
| Survey questions | `src/data/surveyQuestions.js` |

The catalog is shared, so after changing prices deploy **both** the website and the Cloud Functions.

## Requirements

- Node.js 22 (20 and 24 also work for the website)
- npm or yarn
- Firebase CLI for Firebase deployment
## Local Development With Docker

### 1. Build Image

```bash
docker build -t my-souvenir-app .
```

### 2. Run Container

```bash
docker run -p 9000:9000 my-souvenir-app
```

This launches the Quasar/Vite development server.

## Production Build

Create a production build with:

```bash
docker run --rm -p 9000:9000 my-souvenir-app npm run build
```

The generated SPA files are written to:

```text
dist/spa
```


## Firebase Configuration

The application is configured to use Firebase through:

```text
src/services/firebase.js
```

If you are using a different Firebase project, update the Firebase configuration and make sure the correct project alias is configured in:

```text
.firebaserc
```

Example:

```json
{
  "projects": {
    "default": "cksc-merchandis"
  }
}
```

Before running Firebase commands, authenticate and select the appropriate project:

```bash
firebase login
firebase use <your-project>
```

### One-time project setup

1. **Authentication → Sign-in method:** enable **Google** (staff) and **Anonymous** (buyers are signed in anonymously at checkout so they can see and cancel only their own orders).
2. **Firestore rules:** `firebase deploy --only firestore:rules`
3. **First super admin:** in the Firestore console create `users/<your Firebase Auth uid>` with `role: "super_admin"`. Everyone else is invited from **帳號管理** and activated on their first Google sign-in.
4. **Firebase Storage** is not used. If it is enabled, set its rules to deny everything.
5. **App Check (recommended before opening):** helps block scripts from placing fake orders that email arbitrary addresses. Create a **reCAPTCHA Enterprise** score-based website key with `souvenir.cksc.tw` allowed, then in the Firebase console go to **App Check** and register the web app with **reCAPTCHA Enterprise** using that key. Put the same site key in `APP_CHECK_SITE_KEY` in `functions/shared/config.js`, publish the updated website through GitHub Pages, and verify that App Check tokens are issued before deploying the functions with enforcement enabled. The Firebase SDK manages the reCAPTCHA tokens; no separate HTML click handler is needed. Each email address is also limited to 10 orders per day (staff are exempt).

### Guest orders

Buyers don't log in: the site signs them in anonymously at checkout and every order stores that account as `ownerUid`, so only that browser can see or cancel it. If someone signs in on the staff login page from the same browser, the `claimOrders` function moves their guest orders along with them (to the staff account, or back to a new guest account if the login is refused). Orders placed before `ownerUid` existed can only be seen by admins, except staff orders, which are reassigned to the staff account on their next login.

## Cloud Functions & Email

The Cloud Functions in:

```text
functions/index.js
```

expect the following Secret Manager secrets (`firebase functions:secrets:set NAME`):

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `SENDER_EMAIL`

See `functions/README.md` for details. The website itself does not need them, but placing an order does need the deployed `createOrder` function.

## Deployment

### GitHub Pages

The frontend is published through:

```text
.github/workflows/deploy.yml
```

The workflow installs dependencies, builds the Quasar application, and publishes the generated files from:

```text
dist/spa
```

### Firebase

To deploy the Cloud Functions and Firestore rules (and Firebase Hosting):

```bash
firebase deploy
```

## Main Routes

| Route | Description |
|---|---|
| `/` | Storefront home |
| `/product/:id` | Product detail page |
| `/cart` | Shopping cart and checkout |
| `/orders` | Buyer order history |
| `/orders/:id` | Order detail |
| `/admin` | Admin dashboard |
| `/admin/login` | Admin login |
| `/comingsoon` | Pre-launch landing page |

## Application Notes

### Launch Gate

The storefront launch gate is enforced in:

```text
src/router/index.js
```

Before `SHOP_OPEN_AT` in `functions/shared/config.js`, visitors are redirected to `/comingsoon` and the `createOrder` function rejects orders. Staff accounts can bypass this restriction.

### Staff roles

| Role | Can |
|---|---|
| `manager` 友校幹部 | View survey results, see the shop before it opens |
| `admin` 建班幹部 | Everything above, plus view/edit/delete all orders, export Excel, print receipts, email payment/pickup notifications to buyers |
| `super_admin` 系統管理員 | Everything above, plus manage staff accounts |

## Maintainers

This project is maintained by the **Taipei Municipal Chien Kuo High School Student Council**.

## Developers

### Chris Sun

- 79-2 Student Council Student Assembly Deputy Speaker
- 80-1 Student Council Chairman (President)
- 80-2 Student Council Speaker

### Jim Tang

- 80-1 Student Council Executive Department CIO
- 80-2 Student Council Executive Department IT Associate

---

**CKSC Online Souvenir**  
Taipei Municipal Chien Kuo High School Student Council

# CKSC Online Souvenir

A modern online souvenir ordering platform for the Chien Kuo High School Student Council, built with **Quasar**, **Vue 3**, and **Firebase**.

---

## Features

* Browse products without signing in
* Shopping cart with local storage
* Online order submission
* Student class and seat number validation
* Support for both CKHS and external schools
* Google Authentication
* Admin dashboard for order management
* Search, filter, and update orders
* Export orders to Excel
* Automatic order confirmation emails
* QR code support for order lookup
* Customer feedback form after ordering

---

## Tech Stack

### Frontend

* Vue 3
* Quasar Framework
* Vue Router
* Pinia

### Backend

* Firebase Authentication
* Cloud Firestore
* Cloud Functions

### Utilities

* XLSX
* FileSaver.js

---

## Project Structure

```text
src/            Frontend application
functions/      Firebase Cloud Functions
public/         Static assets
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
quasar dev
```

---

## Build

Generate the production build:

```bash
quasar build
```

The production files will be generated in:

```text
dist/spa
```

---

## Firebase Services

This project uses Firebase for backend services:

* Authentication
* Cloud Firestore
* Cloud Functions

> Firebase Hosting is **not** used for production deployment.

Before running the project, configure your Firebase project and provide the required environment variables.

---

## Deployment

The website is deployed using **GitHub Pages** with **GitHub Actions**.

Every push to the `main` branch automatically:

1. Builds the Quasar application
2. Uploads the generated files
3. Publishes the latest version to GitHub Pages

No manual deployment is required.

---

## Repository

```text
https://github.com/CKStudentCouncil/Souvenir
```

---

## Project Pages

* Store: `/`
* Shopping Cart: `/cart`
* Orders: `/orders`
* Admin Dashboard: `/admin`

---

## Pre-Launch Gate (Coming Soon)

Before the sale start date, storefront pages are gated and redirect visitors to `/comingsoon` instead of showing the shop.

**Where it lives:** `src/router/index.js`, inside the `beforeEach` navigation guard.

```javascript
const starttime = new Date('2025-11-05T12:00:00+08:00')
const isAfterStartTime = new Date() >= starttime
const shopRoutes = ['home', 'product', 'cart', 'order-success', 'orders', 'order-detail']

if (!USE_MOCK_ORDERS && !isAfterStartTime && shopRoutes.includes(to.name)) {
  if (!authStore.isAdmin) {
    return { name: 'comingsoon' }
  }
}
```

**How it works:**

* `starttime` is a fixed date hardcoded in the guard.
* Any visitor navigating to a route in `shopRoutes` before that date is redirected to `/comingsoon`, unless they're an admin (so the team can preview the store before launch) or `USE_MOCK_ORDERS` is enabled (local/dev mode bypasses the gate entirely).
* Once the system clock passes `starttime`, the condition stops matching and the storefront opens automatically — no redeploy needed at launch time itself.

**Known limitations:**

* **Changing the launch date requires editing this constant and redeploying.** It is not configurable from the admin dashboard or Firestore.
* **The check runs on the visitor's own device clock**, not a server clock. Someone who sets their local system time forward can view the store early. This is acceptable for the current low-stakes use case, but if the launch date must never be bypassable, the gate should be enforced server-side (e.g. Firestore Security Rules or a Cloud Function) instead of purely in the client-side router.

---

## License

This project is maintained by the **Chien Kuo High School Student Council**.

## Developer

This project is developed by:

Chris Sun
- 79-2 Student Council Student Assembly Deputy Speaker
- 80-1 Student Council Chairman(President)
- 80-2 Student Council Speaker

Jim Tang
- 80-1 Student Council Executive Department CIO
- 80-2 Student Council Executive Department IT Associate
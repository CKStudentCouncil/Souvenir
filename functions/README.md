# Cloud Functions

All functions run in `asia-east1` on Node.js 22.

| Function | Trigger | What it does |
|---|---|---|
| `createOrder` | Callable (checkout page) | Validates the order, prices it from `shared/catalog.js`, assigns an ID like `CKS202611050001` (per-school daily serial) and saves it with the buyer's uid. Max 10 orders per email per day for non-staff; requires App Check once `APP_CHECK_SITE_KEY` is set |
| `claimOrders` | Callable (staff login) | Moves a guest's orders to the account they signed in as (proven with the guest's ID token), and gives staff their orders from before `ownerUid` existed |
| `sendOrderQRCode` | New document in `orders` | Emails the order confirmation with a pickup QR code (links to `/admin/orders/<id>`) |
| `sendOrderNotification` | Callable (admin page, admins only) | Emails a payment / pickup / custom notice to every buyer, or to one school |

## Layout

```text
index.js                 # the functions above
lib/orders.js            # order validation, pricing and order-ID generation
lib/emailTemplates.js    # confirmation and notification emails (shared layout)
lib/mailer.js            # AWS SES transport and sender address
shared/                  # catalog, pricing, settings and small helpers; also imported by the website
```

## Setup

```bash
cd functions
npm install
```

Email is sent through AWS SES. Store the credentials as Secret Manager secrets:

```bash
firebase functions:secrets:set AWS_ACCESS_KEY_ID
firebase functions:secrets:set AWS_SECRET_ACCESS_KEY
firebase functions:secrets:set AWS_REGION        # e.g. ap-northeast-1
firebase functions:secrets:set SENDER_EMAIL      # an SES-verified address
```

Never commit credentials to this repository.

## Test locally

```bash
npm run serve
```

This starts the Functions emulator. Emails are only sent when the secrets are available.

## Deploy

```bash
firebase deploy --only functions
```

After changing `shared/catalog.js` (prices, products), deploy the functions **and** the website so both use the same prices.

## Logs

```bash
npm run logs
```

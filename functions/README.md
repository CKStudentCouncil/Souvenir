# Cloud Functions

All functions run in `asia-east1` on Node.js 22.

| Function | Trigger | What it does |
|---|---|---|
| `createOrder` | Callable (checkout page) | Validates the order, prices it from `shared/catalog.js`, assigns an ID like `CKS202611050001-4A9C7E21B8D3` (per-school daily serial plus a random suffix) and saves it with the buyer's uid. Max 10 orders per email per day for non-staff; requires App Check once `APP_CHECK_SITE_KEY` is set |
| `claimOrders` | Callable (staff login) | Moves a guest's orders to the account they signed in as (proven with the guest's ID token), and gives staff their orders from before `ownerUid` existed |
| `sendOrderQRCode` | New document in `orders` | Emails the order confirmation with a pickup QR code (links to `/admin/orders/<id>`) |
| `prepareOrderNotification` | Callable (admin and survey results pages, admins only) | Saves a payment / pickup / custom notice or the survey invitation (`/survey`), and its recipients, as `notificationJobs/{id}`. Nothing is sent yet |
| `sendOrderNotification` | Callable (admins only) | Puts that job's BCC batches (49 buyers each) in `mailQueue`. Safe to call again with the same job: queued batches are never resent |
| `getOrderNotificationStatus` | Callable (admins only) | Reports how many recipients SES has accepted, failed or left uncertain |
| `processMailQueue` | Every minute | Sends due `mailQueue` messages through SES, paced to `SES_RECIPIENTS_PER_SECOND` (default 14). Only explicit SES rejections are retried; a send whose result is unknown is marked uncertain, never resent |

Bulk email works the same way as the ticket system: buyers are in BCC and the To is the council mailbox (`NOTIFY_TO` in `lib/mailQueue.js`). Delivery continues after the admin page is closed, and the page shows the progress.

## Layout

```text
index.js                 # order functions; re-exports the rest
lib/common.js            # Firebase Admin, region and role checks
lib/notifications.js     # bulk email jobs (prepare / queue / status)
lib/mailQueue.js         # the mail queue and its scheduled worker
lib/mailQueueCore.js     # queue logic, shared with the ticket system
lib/orders.js            # order validation, pricing and order-ID generation
lib/emailTemplates.js    # confirmation and notification emails (shared layout)
lib/surveyEmailTemplate.js  # survey invitation email (its own page)
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

```bash
npm test
```

Runs the unit tests in `lib/*.test.js`.

## Deploy

```bash
firebase deploy --only functions
```

`sendSurveyInvitation` was replaced by `prepareOrderNotification` with `type: 'survey'`; let the deploy delete it. `processMailQueue` needs Cloud Scheduler, which the Blaze plan includes.

After changing `shared/catalog.js` (prices, products), deploy the functions **and** the website so both use the same prices.

## Logs

```bash
npm run logs
```

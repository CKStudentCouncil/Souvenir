# CKSC Online Souvenir

A web shop for Chien Kuo High School Student Council commemorative souvenirs, built with Quasar, Vue 3, and Firebase.

## Features

- Browse products without logging in
- Add items to a local cart and place orders online
- Separate student class and number fields
- Skip class/number for non-student schools
- Admin login and order management
- Search and filter orders in the admin panel
- Export order data to Excel
- Send order confirmation emails with QR codes
- Include a post-order feedback form link

## Tech Stack

- Vue 3
- Quasar Framework
- Vue Router
- Pinia
- Firebase Authentication
- Cloud Firestore
- Firebase Cloud Functions
- XLSX / FileSaver

## Project Structure

- `src/` - Frontend app
- `functions/` - Firebase Cloud Functions for email notifications
- `firebase.json` - Firebase Hosting and Functions config

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

## Production Build

Build the app:

```bash
npm run build
```

The production output is generated in `dist/spa`.

## Firebase Setup

This project uses Firebase Hosting, Firestore, Authentication, and Cloud Functions.

If you deploy Cloud Functions, make sure:

- Your Firebase project is active
- Cloud Functions and Secret Manager are enabled
- Gmail credentials are configured for email delivery

## Deployment

Deploy the app:

```bash
npm run build
npx -y firebase-tools@latest deploy
```

If you want to deploy only one part:

```bash
npx -y firebase-tools@latest deploy --only hosting
npx -y firebase-tools@latest deploy --only functions
```

## Notes

- Admin pages are under `/admin`
- Order details are shown in `/orders`
- The email QR code points to the admin order detail route

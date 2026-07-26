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

## License

This project is maintained by the **Chien Kuo High School Student Council**.

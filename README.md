# 🛍️ React Product App

A clean, beginner-friendly product listing app built using **React + Vite**, styled with CSS — includes components with inputs/outputs, a service layer using Observables, and dynamic routing.

---

## 📸 Screenshots

### 🧾 Product List Page

![Product List](./screenshots/product-list.png)

### 📦 Product Detail Page

![Product Detail](./screenshots/product-detail.png)

---

## 📦 Installation Dependencies

This project uses the following dependencies:

```bash

npm install
npm install react-router-dom
npm install rxjs

```

---

## ▶️ Start Development Server

```bash
npm run dev
```

Then open the app in your browser:

```
http://localhost:5173/products
```

---

## 🗃️ Project Structure

```
react-product-app/
├── public/                   # Static assets
├── src/
│   ├── components/           # UI components
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── ProductDetail.jsx
│   ├── data/                 # Static product data
│   │   └── products.json
│   ├── services/             # service using RxJS
│   │   └── ProductService.js
│   ├── styles/               # CSS files per component
│   │   ├── ProductCard.css
│   │   ├── ProductList.css
│   │   └── ProductDetail.css
│   ├── App.jsx               # Route configuration
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md                 # This file!
```

---

## 🎯 Features

- ✅ Product card components with dynamic data binding
- ✅ Emits click events from components to parent (`onClick`)
- ✅ Angular-style `ProductService` with RxJS Observables
- ✅ Route-based navigation:
  - `/products` — Product List
  - `/products/:id` — Product Details
- ✅ Fully responsive layout with soft pink aesthetic
- ✅ Beginner-friendly code and structure

---

---

## 🙌 Author

Built by Mrunmayi <br>
mrunmayirpatil@gmail.com

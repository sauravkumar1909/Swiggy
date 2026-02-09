## Swiggy Clone – Food Delivery Web App

A Swiggy-inspired single-page application built with React, React Router and Redux Toolkit, featuring restaurant listing, detailed menus, cart management, and a production-ready UI.

---

### 🚀 Features

- **Home page**
  - Swiggy-style hero section with promotional banners.
  - Curated **Food**, **Grocery**, and **Dineout** carousels using static data (`FoodData`, `Grocery`, `DineData`).

- **Restaurant listing**
  - Fetches nearby restaurants from Swiggy’s public API.
  - Displays cards with image, name, cuisines, rating and delivery time.
  - **Shimmer skeleton** (`Shimmer`) while data is loading.

- **Restaurant menu**
  - Dynamic route for each restaurant using its `id`.
  - Menu grouped into collapsible sections (`MenuCard`) with nested categories.
  - **Veg / Non-veg filters** applied on the client side.
  - Add / remove items with quantity controls (`RestInfo`).

- **Search inside restaurant**
  - Per-restaurant search page (`SearchFood`) using route parameters.

- **Cart & checkout**
  - Global cart state with **Redux Toolkit** (`CartSlicer`, `stores`).
  - Cart count in header (`RestHeader`) visible across inner routes.
  - Simple checkout screen (`Checkout`) listing items from the cart.

- **Routing & layout**
  - Client-side routing with `react-router-dom` v6.
  - Nested layout via `SecondaryHome` + `RestHeader` for inner pages:
    - `/`
    - `/restaurant`
    - `/city/delhi/:id`
    - `/city/delhi/:id/search`
    - `/Checkout`

---

### 🛠 Tech Stack

- **Frontend**: React, React Router DOM, Redux Toolkit, React Redux
- **Styling**: Tailwind-style utility classes in `className`
- **Bundler**: Parcel
- **State Management**: Redux Toolkit (`configureStore`, slice reducers)
- **Deployment**: Vercel (static `dist` output)
- **Language**: JavaScript (ES6+)

---

### 📁 Project Structure (high level)

- **`src/App.js`** – App entry, routing and providers
- **`src/index.html`** – Parcel entry HTML
- **`src/index.css`** – Global styles
- **`src/Components/`**
  - `Home.js`, `Header.js`
  - `Restaurant.js`, `RestCard.js`, `Shimmer.js`
  - `RestaurantMenu.js`, `MenuCard.js`, `RestInfo.js`
  - `SearchFood.js`
  - `SecondaryHome.js`, `RestHeader.js`
  - `FoodOption.js`, `FoodCard.js`
  - `GroceryOption.js`, `GroceryCard.js`
  - `DineOption.js`, `DineCard.js`
  - `Checkout.js`
- **`src/Utils/`**
  - `FoodData.js`, `Grocery.js`, `DineData.js` (static data)
- **`src/Stored/`**
  - `stores.js` (Redux store)
  - `CartSlicer.js` (cart slice & actions)
- **`vercel.json`** – SPA rewrites for Vercel
- **`package.json`** – Scripts and dependencies

---

### ⚙️ Getting Started

#### 1. Clone the repository

git clone https://github.com/<your-username>/<your-repo>.git
cd "<your-repo>"

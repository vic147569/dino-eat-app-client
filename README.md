# Food Order Delivery Platform

Welcome to the Food Order Delivery Platform! This project is a responsive and interactive web application that allows users to browse menus, add items to their cart, and place orders for delivery.

![Static Badge](https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=white&labelColor=%2361DAFB&color=%2361DAFB) ![Static Badge](https://img.shields.io/badge/-Node_js-black?style=for-the-badge&logo=nodedotjs&logoColor=white&labelColor=%235FA04E&color=%235FA04E) ![Static Badge](https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=%2306B6D4&color=%2306B6D4) ![Static Badge](https://img.shields.io/badge/-Mongo_db-black?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=%2347A248&color=%2347A248) ![Static Badge](https://img.shields.io/badge/-Auth0-black?style=for-the-badge&logo=auth0&logoColor=white&labelColor=%23EB5424&color=%23EB5424) ![Static Badge](https://img.shields.io/badge/-Cloudinary-black?style=for-the-badge&logo=cloudinary&logoColor=white&labelColor=%233448C5&color=%233448C5) ![Static Badge](https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logo=stripe&logoColor=white&labelColor=%23008CDD&color=%23008CDD) ![Static Badge](https://img.shields.io/badge/-React_query-black?style=for-the-badge&logo=reactquery&logoColor=white&labelColor=%23FF4154&color=%23FF4154)

## Features

- **User Authentication:** Users can sign up, log in, and log out securely with Auth0.
- **Menu Browsing:** Users can view a list of available restaurants and their menus.
- **Cart Management:** Users can add items to their cart, adjust quantities, and remove items.
- **Restaurant Management** Users can create their own restaurant and handle orders from customers
- **Order Placement:** Users can place orders and receive real-time order status updates.
- **Responsive Design:** The platform is optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - React Hook Form
  - React Query
  - Tailwindcss
  - Zod
  - shadCN
  - Auth0

- **Backend:**
  - Express.js
  - Mongodb
  - Auth0 API
  - Stripe API
  - Cloudinary
  - mongoose

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Stripe account (if implementing payments)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/food-order-delivery-platform.git
   cd food-order-delivery-platform
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a .env file in the root directory and add the following:

   `client`

   ```plaintext
    VITE_API_BASE_URL=http://localhost:8000
    
    # auth0
    VITE_AUTH0_DOMAIN=
    VITE_AUTH0_CLIENT_ID=
    VITE_AUTH0_CALLBACK_URL=
    VITE_AUTH0_AUDIENCE=
   ```

   `server`

   ```plaintext
    # Mongodb
    MONGODB_CONNECTION_STRING=

    # Auth0
    AUTH0_AUDIENCE=
    AUTH0_ISSUER_BASE_URL=

    # Cloudinary
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    # Stripe
    FRONTEND_URL=http://localhost:5173
    STRIPE_API_KEY=
    STRIPE_WEBHOOK_SECRET=
   ```

4. **Run the backend server:**

   ```bash
   npm run dev
   ```

5. **Run the frontend app:**
   Open a new terminal and run:

   ```bash
   npm run dev
   ```

6. **Visit the app in your browser:**
   Navigate to `http://localhost:5173`

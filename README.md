# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Features

. Infinite Scrolling: Automatically loads more products as the user scrolls down.
. Product Detail View: Clicking on a product navigates to a detailed view page.
. Share Modal: A modal popup to share product details, triggered by clicking the share button on a
product.

Setup and Installation

# Prerequisites

. Nodejs v14 or above
. npm (v6 or above)

Steps to run

1.  Clone the repository

git clone https://github.com/yourusername/product-listing-app.git

cd product-listing-app

2. Install dependencies

   ### `npm install`

3. Available Scripts

In the project directory, you can run:

### `npm start`

The page will reload when you make changes.\
You may also see any lint errors in the console.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Project structure

.
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── components
│ │ ├── Navbar
│ │ │ ├── Navbar.js
│ │ │ └── Navbar.css
│ │ ├── ProductItem
│ │ │ ├── index.js
│ │ │ └── index.css
│ │ ├── ProductList
│ │ │ ├── index.js
│ │ │ └── index.css
│ │ ├── ShareModal
│ │ │ ├── ShareModal.js
│ │ │ └── ShareModal.css
│ ├── pages
│ │ ├── Home
│ │ │ ├── Home.js
│ │ │ └── Home.css
│ │ ├── ProductDetail
│ │ │ ├── ProductDetail.js
│ │ │ └── ProductDetail.css
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md

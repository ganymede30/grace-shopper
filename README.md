# ShoeLaLa

ShoeLaLa is an e-commerce web app built with React, Redux, and PostgreSQL.
The deployed version at https://cram-inc.herokuapp.com/

## Getting Started

Clone the repository.

```
git clone https://github.com/cram-inc/grace-shopper
```

Install project dependencies. Make sure you have [Node](https://nodejs.dev/how-to-install-nodejs) installed for this step.

```
npm install
```

Seed a local database with mock products, orders, and users. Make sure you have [PostgreSQL](https://www.postgresql.org/) installed for this step.

```
npm run seed
```

To start the application, run the following command and then navigate to localhost:8080 in your browser.

````
npm run start-dev
````

To sign up using Google OAuth, register with [Google’s API service](https://developers.google.com/identity/protocols/OAuth2). Then, create a local `secrets.js` file and populate it with the following:

```
process.env.GOOGLE_CALLBACK = '/auth/google/callback'
process.env.GOOGLE_CLIENT_ID = YOUR_CLIENT_ID
process.env.GOOGLE_CLIENT_SECRET = YOUR_CLIENT_SECRET
```

## Features

ShoeLaLa offers a full e-commerce experience with the following functionality:
* Sign up
* Log in
* Browse all products
* Filter products by brand
* View details of a single product
* Add to cart
* Checkout

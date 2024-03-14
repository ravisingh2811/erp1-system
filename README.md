# GitHub Codespaces ♥️ React

Welcome to your shiny new Codespace running React! We've got everything fired up and running for you to explore React.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

This project was bootstrapped for you with [Vite](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

### `npm start`

We've already run this for you in the `Codespaces: server` terminal window below. If you need to stop the server for any reason you can just run `npm start` again to bring it back online.

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`) to view your running application.

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 ERP(Enterprise Resource Planning) System with React

## 1. Introduction

The documentation provides a guide for setting up and using the front-end application for a simplified ERP system built using React. The project aims to create a user-friendly interface for managing key aspects of a business, including products and orders management.

## 2. Prerequisites

- Ensure you have Node.js installed on your machine.

- You should have a basic understanding of React and React Router.

## 3. Installation

Clone the repository to your local machine using the following command: *git clone <repository_url>*

Navigate to the project directory: *cd erp-system-react*

Install dependencies using npm or yarn: *npm install* or *yarn install*

## 4. Running the Application

Start the development server by running the following command: 

*npm run start or yarn start*

The application will open in your default web browser. If not, navigate to http://localhost:3000 in your browser.



## Features

### Dashboard Page

- Upon opening the application, you will be directed to the Dashboard page.
- The Dashboard displays key metrics or features, such as total number of products and orders.
- Links or buttons are provided for quick navigation to the Products and Orders management pages.
  
![App Screenshot](https://github.com/PratyayRaj/Pratyay_ERP/blob/main/Screenshots/Screenshot%202024-03-13%20014914.png)

### Products Management Page

- Click on the "Products" link/button in the Dashboard to navigate to the Products Management page.
  
![App Screenshot](https://github.com/PratyayRaj/Pratyay_ERP/blob/main/Screenshots/Screenshot%202024-03-13%20020930.png)

- The Products Management page presents a list of products with details including name, category, price, and stock quantity.
- You can add, edit, and delete products using the functionalities provided.
  
![App Screenshot](https://github.com/PratyayRaj/Pratyay_ERP/blob/main/Screenshots/Screenshot%202024-03-13%20021006.png)

### Orders Management Page

- Navigate to the Orders Management page by clicking on the "Orders" link/button in the Dashboard.
- The Orders Management page displays a list of orders with details such as order ID, customer name, order date, and status.
  
![App Screenshot](https://github.com/PratyayRaj/Pratyay_ERP/blob/main/Screenshots/Screenshot%202024-03-14%20144333.png)

- View order details, update order status, and delete orders as required.
  
![App Screenshot](https://github.com/PratyayRaj/Pratyay_ERP/blob/main/Screenshots/Screenshot%202024-03-14%20144506.png)

### Orders Calendar View

- If implemented, the Orders Calendar View provides a calendar interface displaying orders based on their expected delivery dates.
  
![App Screenshot](https://github.com/PratyayRaj/Pratyay_ERP/blob/main/Screenshots/Screenshot%202024-03-14%20144633.png)

- Click on a date to view all orders due for delivery on that day.
  
![App Screenshot](https://github.com/PratyayRaj/Pratyay_ERP/blob/main/Screenshots/Screenshot%202024-03-14%20144646.png)
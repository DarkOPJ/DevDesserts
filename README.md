# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
A Product List feature in a React project typically involves displaying a collection of products fetched from an API or a local data source. Users can view product details, add products to a cart, adjust quantities, and proceed to checkout. 

### The challenge
Your challenge is to build out this product list project that includes a functional cart and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So, if you have something you'd like to practice, feel free to give it a go.

We provide the data for the products in a local `data.json` file. So you can use that to populate the UI dynamically if you choose.

Users should be able to:
- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![./screenshots/addToCart, ./screenshots/removeFromCart, ./screenshots/increaseAndDecrease, ./screenshots/confirmOrder, ./screenshots/resetCart, ./screenshots/desktop, ./screenshots/tablet, ./screenshots/mobile]

### Links

- Solution URL: [https://github.com/DarkOPJ/DevDesserts]
- Live Site URL: [https://dev-desserts-z41h.vercel.app/]

Refresh a couple of times as the fetching from the api fails a couple of times.

## My process

Set Up: Used React with Vite for fast development and TailwindCSS for styling.

Data Fetching: Integrated a loader function in React Router to fetch product data from a JSON server API.

State Management: Managed cart state using React Context for easy access across components.

Dynamic Components: Built reusable components for product listing, cart, and modals, including logic for adding/removing products.

Backend: Initially used a local JSON server for testing and later deployed the API online (jsondevdessert.onrender.com).

Deployment: Deployed the React app on Vercel with a proxy configuration to handle API requests.

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

TailwindCSS: Using utility classes for rapid and responsive UI development. And using grid on different screen sizes.

Context API: Efficiently managing global state, like the cart, across multiple components. This greatly helped me avoid prop drilling since this is my first react and tailwind project after studying.

Using the new 
```html
<dialog> Modal <br> <button>Close</button> </dialog> 
```
html tag for easier modal creation. But styling the white dialog box position within its backdrop is a challenge.

The useRef() hook to help bring vanilla js functions on html components like dialog showOpen() and close().

To see how you can add code snippets, see below:

### Continued development

The use of context api.

Proper React hook usage.

### Useful resources

- [https://www.youtube.com] - This helped me to study tailwind and react js for this project, also how to use the context api in react.
- [https://www.chatgpt.com] - This helped me to understand various hooks and how to use them, also best practices in writing code in react.

## Author

- Name - [DarkOPJ]
- Frontend Mentor - [https://www.frontendmentor.io/profile/DarkOPJ]

## Acknowledgments
On youtube, @lightcodechannel for great help with learning tailwind using a project. https://www.youtube.com/watch?v=zKguO4oaAGs&t=2837s

On youtube, @TraversyMedia for great help with learning React with a simple jobs project covering many concepts like props, hooks, ways of fetching data etc. https://www.youtube.com/watch?v=LDB4uaJ87e0&t=74s

On youtube, @codewithyousaf for great help with learning context api. https://www.youtube.com/watch?v=uMBgUUPkgUY&t=2983s

# Frontend challenge

Develop an application to manage restaurant orders. The proposal is to implement a clean and simple flow, disregarding actions that would potentially exist in such an application such as login, editing and canceling orders, etc.

## Instructions

- Fork this repository;
- Implement the project according to the requirements;
- When finished, submit a pull request.

## Requirements

#### Prerequisites

- The application must be developed using essentially Vue, without the aid of frameworks like NuxtJS or similar;
- Feel free to bootstrap the project using your own environment configuration or using Vue CLI;
- The application must have a single-page application (SPA) architecture;
- State management must use Vuex;
- Styles (CSS) must be implemented without the aid of libs or third party frameworks;
- The application must have two main modules: **Orders** and **Billing**;
- The list of available products and prices must be obtained at: https://5ff37c3328c3980017b195e8.mockapi.io/api/products;
- Price values ​​must be treated as BRL (R$);
- The README must contain instructions about how to install the environment and run the application.

#### Layout

- Feel free to create the layout using your own assets;
- You can use a lib of third-party icons, if you wish;
- The layout must be responsive.

#### Orders

- Must have a detailed list of orders already made;
- There must be a button to create a new order;
- The flow to create a new order must have 4 steps:
    1. Customer identification (name);
    2. List of cards containing the available foods and their respective prices, with the possibility of choosing more than one type of food, specifying the quantity;
    3. List of cards containing the available drinks and their respective prices, with the possibility to choose more than one type of drink, specifying the quantity;
    4. Payment of the order with credit card, simulating the sending of the card data and the total amount to be paid.
- Each order must have an id, datetime, customer and details of the items ordered;
- The id and datetime of each order must be generated automatically.

#### Billing

- Should have a list of available products segmented by type (food and drink), showing the quantity and total (R$) sold by product, and the total (R$) of orders placed.

## Assessment

- File structure;
- Code quality;
- Programming logic;
- HTML semantics;
- UI/UX;
- Git use (don't worry, let's just try to understand how you prefer to register your commits).

#### Bonus

- Order search implementation;
- CSS preprocessor use (preferably Sass);
- Unit tests implementation;
- CI/CD implementation (preferably using GitHub Actions).

**Use your creativity, good luck and have fun! ;)**

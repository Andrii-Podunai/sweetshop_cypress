# Sweet Shop - Basket Tests

This project contains automated tests written in Cypress for the Sweet Shop website. The tests cover adding products to the basket, verifying the basket contents, calculating the total price, and checking out.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Test Structure](#test-structure)
- [Contributing](#contributing)

## Project Overview

This Cypress project automates the following key scenarios for the Sweet Shop website:

- **Adding Products to the Basket:** Automates the process of adding products to the basket and verifies the number of items.
- **Basket Content Verification:** Ensures that the correct items are present in the basket after adding them.
- **Price Calculation:** Verifies that the total price is calculated correctly, including the handling of shipping costs.
- **Checkout Process:** Automates filling out the checkout form and verifying that the user is redirected to the correct page.

## Prerequisites

- **Node.js:** Ensure that you have Node.js installed on your machine.
- **Cypress:** This project uses Cypress as the testing framework.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/sweet-shop-tests.git
   cd sweet-shop-tests
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   This will install all the necessary packages, including Cypress.

## Running the Tests

You can run the Cypress tests in two modes:

### 1. Headless Mode:

Run the tests in the command line without opening the Cypress UI.

```bash
npx cypress run
```

### 2. Interactive Mode:

Run the tests with the Cypress Test Runner UI for a more interactive experience.

```bash
npx cypress open
```

Once the Cypress Test Runner opens, select the test file to run it.

## Test Structure

The main test file is located in `cypress/e2e/sweet_shop_spec.js`. The file contains the following test:

- **Add products to the basket:** This test covers adding items to the basket, verifying the item count, navigating to the basket page, verifying the contents, calculating the total price, and completing the checkout process.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

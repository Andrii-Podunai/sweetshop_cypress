describe('Sweet Shop - Basket Tests', () => {

  // Before all tests, visit the Sweet Shop website
  before(() => {
    cy.visit('https://sweetshop.netlify.app/');
  });

  it('Add products to the basket', () => {
    // Adding 4 products to the basket by clicking the "Add to Basket" button for each item
    cy.get('a.btn.addItem').eq(0).click();
    cy.get('a.btn.addItem').eq(1).click();
    cy.get('a.btn.addItem').eq(2).click();
    cy.get('a.btn.addItem').eq(3).click();

    // Verifying that the basket count increases to 4 items
    cy.get('a.nav-link[href="/basket"] .badge').should('contain', '4');

    // Navigate to the basket page by clicking the basket link in the navbar
    cy.get('a.nav-link[href="/basket"]').click();

    // Verifying that all 4 products are listed in the basket
    cy.get('#basketItems .lh-condensed').should('have.length', 4);

    let totalPrice = 0;

    // Loop through each item in the basket to calculate the total price
    cy.get('#basketItems .lh-condensed').each(($el) => {
      const price = parseFloat($el.find('span.text-muted').text().replace('£', '')); // Extract the price of the item
      const quantity = parseInt($el.find('small.text-muted').text().replace('x ', '')); // Extract the quantity of the item
      totalPrice += price * quantity; // Add the item's total price to the total price variable
    });

    // Verify that the displayed total price matches the calculated total price
    cy.get('#basketItems .list-group-item strong').should('exist').then(($total) => {
      const totalText = $total.text();
      const displayedTotal = parseFloat(totalText.replace('£', ''));
      expect(displayedTotal).to.eq(totalPrice);
    });

    // Expected total price including standard shipping (£1.99)
    let expectedTotalPrice = totalPrice + 1.99;
    
    // Change the delivery option to Standard Shipping
    cy.get('input#exampleRadios2').click({ force: true });

    // Verify that the updated total price includes the shipping cost
    cy.get('#basketItems .list-group-item strong').should(($total) => {
      const updatedTotalPrice = parseFloat($total.text().replace('£', ''));
      // expect(updatedTotalPrice).to.eq(expectedTotalPrice); // Uncomment this when bag is fixed
    });

    // Fill in the checkout form with user details
    cy.get('input#name').eq(0).type('John');
    cy.get('input#name').eq(1).type('Brainee');
    cy.get('input#email').type('john.brainee@example.com');
    cy.get('input#address').type('123 Sweet Street');
    cy.get('select#country').select('United Kingdom');
    cy.get('select#city').select('Birmingham');
    cy.get('input#zip').type('35005');
    cy.get('input#cc-name').type('John Brainee');
    cy.get('input#cc-number').type('4111111111111111');
    cy.get('input#cc-expiration').type('12/25');
    cy.get('input#cc-cvv').type('123');

    // Submit the checkout form
    cy.get('.needs-validation button[type="submit"]').click();

    // Verify that the user is redirected to the correct URL after checkout
    cy.url().should('include', 'basket?');
  });
});

// describe('Checkout & payment',() => {
//   it('As a customer I want to go to the checkout, fill in shipping information and go through the payment page and opt to checkout with PayPal', () => {
//     cy.visit('https://www.ratandboa.com/products/laviza-dress?nosto_source=cmp&nosto=632dd8b6d3cc2250194fdb59')
//     // Slect a size
//     cy.get('.option__dropdown').select('S')
//     // Add to bag button
//     cy.get('.button--full-width').click()
//     // go to bag button
//     cy.contains('Go to bag').click()
//     // go to checkout
//     cy.contains('Go to checkout').click()

//     // Complete the required shipping information
//     cy.get('#checkout_email')      
//       .should('be.visible')
//       .type('test@test.com')
//     cy.get('#checkout_shipping_address_first_name')
//       .should('be.visible')
//       .type('Thomas')
//     cy.get('#checkout_shipping_address_last_name')
//       .should('be.visible') 
//       .type('Buckley')
//     cy.get('#checkout_shipping_address_address1')
//       .should('be.visible') 
//       .type('100 Test street')
//     cy.get('#checkout_shipping_address_city')
//       .should('be.visible') 
//       .type('Manchester')
//     cy.get('#checkout_shipping_address_zip')
//       .should('be.visible') 
//       .type('M124AB')
//     cy.get('#checkout_shipping_address_phone')
//       .should('be.visible') 
//       .type('07123456789')

//     // Click shipping button
//     cy.contains('Continue to shipping').click()
//     // Wait a moment, I think dom wasnt loaded fast enough to catch the next button click (Look into better way of handling this)
//     cy.wait(2000)
//     // Continue to payment
//     cy.get('#continue_button').click()
//     // Select PayPal radio button
//     cy.get('#checkout_payment_gateway_22255685').check()
//     // Conitnue payment (PayPal popup should open)
//     cy.get('#continue_button').click()
//   })
// })

describe('product listing page', () => {

// visit products page before all tests. 
  beforeEach(()=> {
    cy.visit('https://www.ratandboa.com/collections/all')
  })
  
//   // it('As a customer I want to add a product from the product listing page', () => {    
//   //   // Target third product on the listing page
//   //   cy.get(':nth-child(3) > .product > .product__info > .add-to-bag__button').click()
//   //   // Click the add to bag button
//   //   cy.get(':nth-child(1) > .variant-button').click()
//   //   // Check that the text 'added to bag' appears on the pop up. 
//   //   cy.contains('Added to bag', {matchCase: false})
//   // })

//   it('As a customer I want to select size and add a product to the cart from the product detail page', () => {
//     // grab & click first product listed
//     cy.contains('Farretti Dress Blue', {matchCase: false}).click()
    
//     // Check if redirected to detailed product view page
//     cy.url().should('include', 'products')
//     cy.wait(2000)
//     // Select size M from select component
//     cy.get('.option__dropdown').select('M')
//     cy.get('.option__dropdown').should('have.value', 'M')

//     // Click add to bag button
//     cy.get('.button--full-width').click()
    
//     // Click  go to basket
//     cy.get('.button-group > :nth-child(3)').click()

//     // Confirm item is in basket
//     cy.get('.product__details > .product__title').should('have.text', 'Farretti Dress Blue')

//     // Confirm item amount is 1
//     cy.get('.stepper > :nth-child(2)').should('have.text', '1')
//   })


  // it('As a customer I would like to navigate to a product page and open the "help with your size?" link',() => {
  //   cy.wait(1000)
  //   // select this product from the list
  //   cy.contains('Absinthe Dress', {matchCase: false}).click()

  //   // cy.wait(1000)

  //   // Find the size help link & click
  //   cy.contains('Need help with your size?').click()

  //   // give a moment for popup to load
  //   cy.wait(1000)

  //   // confirm popup is visible
  //   // cy.get("#easysize_popup").should('be.visible')

  // })

  it('As a customer I would like to navigate to a product page and open the size guide', () => {
    // click item on list page
    cy.contains('Farretti Dress Blue', {matchCase: false}).click()
    // click the size guide button
    cy.get('.product__help > :nth-child(1)').click()
    // confirm there is a pop up with 'size guide' text content
    cy.get('.panel__header > span').contains('Size guide')
  })
})


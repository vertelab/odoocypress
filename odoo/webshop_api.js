/*-----------------------------------------------------------------
           			Odoo APi For Cypress
  ---------------------------------------------------------------*/
	  
var odoo_url = Cypress.env("odoo_url")  

/*-----------------------------------------------------------------
		Go to webshop category 
EX: cy.goto_category(category_id)
-----------------------------------------------------------------*/
Cypress.Commands.add('goto_category', (category_id) => {  
    cy.visit(odoo_url + '/shop/category/' + category_id)
})

/*-----------------------------------------------------------------
		Go to webshop product
EX: cy.goto_product(product_id)
-----------------------------------------------------------------*/
Cypress.Commands.add('goto_product', (product_id) => {  
    cy.visit(odoo_url + '/shop/' + product_id)
    cy.wait(500) // needed for add to cart to work for some reason
})

/*-----------------------------------------------------------------
		Add product to cart - Assumes we are on product page
EX: cy.add_to_cart(product_id)
-----------------------------------------------------------------*/
Cypress.Commands.add('add_to_cart', (product_id) => {
    cy.get('a[id="add_to_cart"]').click()
})



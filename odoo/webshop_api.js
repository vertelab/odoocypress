/*-----------------------------------------------------------------
           			Odoo Webshop API For Cypress
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
})

/*-----------------------------------------------------------------
		Add one or more product to cart
EX: cy.add_to_cart([product_id, ...])
-----------------------------------------------------------------*/
Cypress.Commands.add('add_to_cart', (products_id) => {
    for(var i = 0; i < products_id.length ; i++) {
        cy.visit(odoo_url + '/shop/' + products_id[i])
        cy.wait(500) // needed for add to cart to work for some reason
        cy.get('a[id="add_to_cart"]').click()
        cy.wait(500)        
    }
})

/*-----------------------------------------------------------------
		Removes all products from cart
EX: cy.empty_cart()
-----------------------------------------------------------------*/
Cypress.Commands.add('empty_cart', () => {
    cy.visit(odoo_url + '/shop/cart');

    cy.get('a[class="js_delete_product no-decoration"]').each(($match) => {
        cy.wait(500);
        cy.get($match).invoke('click');
        cy.wait(500);
        cy.visit(odoo_url + '/shop/cart');
    })
})

/*-----------------------------------------------------------------
		Places an order for all items currently in the cart
EX: cy.place_order()
-----------------------------------------------------------------*/
Cypress.Commands.add('place_order', () => {
    cy.visit(odoo_url + '/shop/checkout?express=1')
    cy.SetValue("phone", "0720112233");
    cy.SetValue("street", "Nygatan 9");
    cy.SetValue("city", "Linköping");
    cy.SetValue("zip", "111 11");
    cy.get('select[name="country_id"]').select("196");
    cy.get('a[class="btn btn-primary mb32 a-submit a-submit-disable a-submit-loading"]').click();
    cy.get('a[class="btn btn-primary mb32"]').click();
})

/*-----------------------------------------------------------------
		Use free text search in webshop - Assumes we are in webshop
EX: cy.search_webshop('Olive Oil')
-----------------------------------------------------------------*/
Cypress.Commands.add('search_webshop', (search_word) => {    
    cy.get('input[class="search-query form-control oe_search_box"]').should('have.attr', 'name', 'search').type(search_word).should('have.value', search_word)
    cy.get('button[class="btn btn-primary oe_search_button"]').click()
})

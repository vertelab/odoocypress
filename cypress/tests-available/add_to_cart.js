import backoffice_api from '../../odoo/backoffice_api';
import webshop_api from '../../odoo/webshop_api';
const { users } = require('../../odoo/users.js');

const database = Cypress.env("database");
const odoo_url = Cypress.env("odoo_url");

describe('Adding product 7 to cart as admin', () => {
    it('... as ' + user, () => {
        cy.Login(database, users['admin']['email'], users['admin']['password']);
        cy.goto_product(7);
        cy.add_to_cart();
    }
}

//~ describe('Navigating from webshop -> category -> product -> add to cart', ()=> {
    //~ for (var user in users) {
        //~ it('... as ' + user, () => {
            //~ cy.Login(database, users[user]['email'], users[user]['password']);
            //~ cy.visit(odoo_url + '/shop');
            //~ cy.goto_category(3);
            //~ cy.goto_product(7);
            //~ cy.add_to_cart();
        //~ })
    //~ }
//~ })

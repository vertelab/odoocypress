import backoffice_api from '../../odoo/backoffice_api';
import webshop_api from '../../odoo/webshop_api';
const { users } = require('../../odoo/users.js');

const database = "maria4_utv2";
const odoo_url = Cypress.env("odoo_url");

describe('Add some products to cart', ()=> {
    Object.keys(users).forEach(function(user) {
        it('... as ' + user, () => {
            cy.Login(database, users[user]['email'], users[user]['password']);
            cy.add_to_cart([7, 8, 9]);
            cy.Logout();
        })
    })
})

describe('Navigating from webshop -> category -> product -> add to cart', ()=> {
    Object.keys(users).forEach(function(user) {
        it('... as ' + user, () => {
            cy.Login(database, users[user]['email'], users[user]['password']);
            cy.visit(odoo_url + '/shop');
            cy.goto_category(3);
            cy.add_to_cart([7]);
            cy.Logout();
        })
    })
})

describe('Searching for Olive in text search field', ()=> {
Object.keys(users).forEach(function(user) {

        it('... as ' + user, () => {
            cy.Login(database, users[user]['email'], users[user]['password']);
            cy.visit(odoo_url + '/shop');
            cy.search_webshop('Olive');
            cy.Logout();
        })
    })
})



describe('Navigating around webshop menus', ()=> {
    Object.keys(users).forEach(function(user) {
        it('... as ' + user, () => {
            cy.Login(database, users[user]['email'], users[user]['password']);
            cy.visit(odoo_url + '/shop');
            // TODO: generalisera. lista ut alla huvudkategorier och loopa igenom istället.
            cy.goto_category(3);
            cy.goto_category(15);
            cy.goto_category(30);
            cy.goto_category(50);
            cy.goto_category(73);
            cy.goto_category(76);
            cy.Logout();
        })
    })
})

// TODO: cy.place_order() does not actually place and order. It just finds the button.
describe('Placing an order', ()=> {
    Object.keys(users).forEach(function(user) {
        it('... as ' + user, () => {
            cy.Login(database, users[user]['email'], users[user]['password']);
            cy.add_to_cart([7]);
            cy.place_order();
            cy.Logout();
        })
    })
})

import api from '../../odoo/api';
const { users } = require('../../odoo/users.js');

const database = Cypress.env("database");
const odoo_url = Cypress.env("odoo_url");

describe('Logging in as all users ...', () => {
    for (var user in users) {
        it('Logging in to database ' + database + ' as ' + user, () => { 
            cy.Login(database, users[user]['email'], users[user]['password']);
        })
    }
})

describe('Navigation to shop', ()=> {
 	it('Navigate To eCommerce Category', () => {
        cy.Login(database, users['admin']['email'], users['admin']['password']);
     	cy.visit(odoo_url + '/shop');
    })
})

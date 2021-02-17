import api from '../../odoo/api';
const { users } = require('../../odoo/users.js');

const database = Cypress.env("database");

describe('Logging in and out as all users ...', () => {
    for (var user in users) {
        it('Logging in to database ' + database + ' as ' + user, () => { 
            cy.Login(database, user['email'], user['password']);
        })
        //~ it('Logging out ' + user, () => { 
            //~ cy.Logout();
        //~ })
    }
})

describe('Navigation', ()=> {
 	it('Navigate To eCommerce Category', () => {
        cy.Login(database, users['admin']['email'], users['admin']['password']);
     	cy.visit('http://barney.vertel.se/shop');
    })
    
    /*
    it('Go to Website under MainMenu', () => {
     	cy.MainMenu('Website','TODO: sale.sale_menu_root');
    })
     */
})

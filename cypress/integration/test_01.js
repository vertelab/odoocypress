import api from '../../odoo/api';
import {users} from '../../odoo/users.js';

var database = Cypress.env("database");

describe('Logging in and out as all users ...', () => {
    for ((display_name, credentials) in users) {
        it('Logging in as ' + display_name, () => { 
            cy.Login(database, credentials['email'], credentials['password']);
        })
        it('Logging out ' + display_name, () => { 
            cy.Logout();
        })
    }
})

describe('Navigation', ()=> {
 	it('Navigate To eCommerce Category', () => {
     	cy.visit('http://barney.vertel.se/shop');
    })
    
    /*
    it('Go to Website under MainMenu', () => {
     	cy.MainMenu('Website','TODO: sale.sale_menu_root');
    })
     */
})

// EXAMPLE FROM ODOO_SPEC.JS
context('Creating something', () => {     
   // Example : Create Customer
   it('Customer', () => {
       cy.MainMenu('CRM','crm.crm_menu_root')
       cy.SubMenu('Customers','crm.res_partner_menu_crm')
       cy.Button('Create')
       cy.SetValue('name','Borni DHIFI')
       cy.SetValue('city','Ariana')
       cy.M2O_SetValue('country_id','Tunisia')
       cy.SetValue('mobile','0021621809219')
       cy.Button('Save')
    })
})

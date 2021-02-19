import backoffice_api from '../../odoo/backoffice_api';
const { users } = require('../../odoo/users.js');

const database = Cypress.env("database");
const odoo_url = Cypress.env("odoo_url");

describe('Logging in ...', () => {
    for (var user in users) {
        it('Logging in to database ' + database + ' as ' + user, () => { 
            cy.Login(database, users[user]['email'], users[user]['password']);
        })
    }
})

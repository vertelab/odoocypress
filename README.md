# odoocypress
Testing and automation of Odoo 14.0 using Cypress.

Created from the odoo-cypress repo (https://github.com/borni-dhifi/odoo-cypress) \
For more information see the original odoo-cypress repo.

### Installation and setup
* install cypress: `npm install cypress`
* configure `cypress.env.json`

### Usage
* run all tests in `cypress/integration/` with `npm run cy_run`
* `odoo/backoffice_api.js` contains functions for navigation and modification of odoo backoffice.
* `odoo/webshop_api.js` contains functions for navigation and modification of odoo webshop.
* write tests in `cypress/integration/`
* cypress open --config '{"testFiles":["**/*.js","**/*.ts"]}'

### Inspiration
* `examples/` contains two directories: one with examples of generic cypress functions, and one with examples of how the odoo-cypress API is used.

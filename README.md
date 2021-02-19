# odoocypress
Testing and automation of Odoo 14.0 using Cypress.

Created from the odoo-cypress repo (https://github.com/borni-dhifi/odoo-cypress) \
For more information see the original odoo-cypress repo.

### Installation and setup
* install cypress: `npm install cypress`
* configure `cypress.env.json`

### Usage
* write tests in `cypress/tests-available`
* symlink desired tests in `cypress/tests-available` from `cypress/integration/`
  * i.e. run `ln -s ../tests-avaiable/myTest.js .` from `cypress/integration/` 
* `npm run cy_run` runs all tests in `cypress/integration/`
* `odoo/backoffice_api.js` contains functions for navigation and modification of odoo backoffice.
* `odoo/webshop_api.js` contains functions for navigation and modification of odoo webshop.
* `npm run cy_open` opens the cypress GUI if you wish to do so

### Inspiration
* `examples/` contains two directories: one with examples of generic cypress functions, and one with examples of how the odoo-cypress API is used.

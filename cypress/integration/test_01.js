import api from '../../odoo/api'


  // context('Login', () => { 
  //     it('Check user/password', () => {
  //      cy.Login("admin")
  //      cy.Login("slutkonsument")
       
  //    })
  // })



// describe('My first Cypress Test', ()=> {

// 	it('Navigate To Partie Site', () => {
//     	cy.visit('http://barney.vertel.se/');
       
//     })

// })

// describe('Login Test', ()=> {

// it('Login', (user) => { 
//     cy.get('#login')
//     .type(user.text)

//   cy.get('#password')
//     .type(user.password)

//   cy.Login({ text: 'testkund_sk@example.com', password: 'summer123' })

// })

// })


describe('Login Test', ()=> {

it('Login', (login, password) => { 
  //   cy.get('#login')
  //   .type(user.text)

  // cy.get('#password')
  //   .type(user.password)

  cy.Login({ login: 'testkund_sk@example.com', password: 'summer123' })

})

})


// cy.typeLogin({ email: 'testkund_af@example.com', password: 'summer123' })

// cy.typeLogin({ email: 'testkund_spa@example.com', password: 'summer123' })

// cy.typeLogin({ email: 'testkund_ht@example.com', password: 'summer123' })
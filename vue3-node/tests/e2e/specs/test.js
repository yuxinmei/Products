// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('button').click();
  })
})

// describe('My First Test', () => {
//   it('finds the content "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('button').click();

//     cy.url().should('include', '/commands/actions');

//     cy.get('.action-email')
//       .type('jerry@email.com')
//       .should('have.value', 'jerry@email.com');
//   })
// })
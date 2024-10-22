// https://on.cypress.io/api

describe('Basic Tests', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('Hi, I am Tomás Yañez')
  })
})

// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('Actions', () => {
  // beforeEach(() => {
  //   cy.visit('/')
  // })

  it.skip('ver texto', () => {
    cy.visit('http://localhost:3000');
    cy.percySnapshot('inicio')
    cy.get('span').contains('Hola Juan')
  })

  // it('Snapshot', () => {
  //   cy.percySnapshot('inicio')
  // })
})
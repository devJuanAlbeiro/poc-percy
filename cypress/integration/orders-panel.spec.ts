context('Orders Panel', () => {
  it('can check Orders panel', () => {
    cy.visit('http://localhost:3000/')
    cy.percySnapshot('Orders panel')

    cy.get('[data-cy=custom-title]')
      .should('exist')
      .should('contain', 'Recent Orders')

    cy.get('[data-cy=custom-title]').should(
      'have.css',
      'color',
      'rgb(25, 118, 210)'
    )

    cy.get('[data-cy=see-more-orders-link]').should(
      'have.css',
      'justify-content',
      'center'
    )
  })
})

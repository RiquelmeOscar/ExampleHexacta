describe('Example test suite hexacta', () => {



  it('Title valid', () => {

    cy.visit("https://www.hexacta.com/")
    cy.title().should('eq','Nearshore Software Development Company | Hexacta')

  })

  // 1 Visita:https://example.cypress.io
  // 2 Encuentra el elemento con contenido:type
  // 3 Haz click en eso
  // 4 Obtener la URL
  // 5 Afirma que incluye:/commands/actions
  // 6 btenga la entrada con el action-emaildata-testid
  // 7 Escriba fake@email.comen la entrada
  // 8 Afirmar que la entrada refleja el nuevo valor

  // it('Clicks the link "Type"', () => {

  //   cy.visit('https://example.cypress.io')

  //   cy.contains('type').click()

  //   // Should be on a new URL which
  //   // includes '/commands/actions'
  //   cy.url().should('include', '/commands/actions')

  //   // Get an input, type into it
  //   cy.get('.action-email').type('fake@email.com')

  //   //  Verify that the value has been updated
  //   cy.get('.action-email').should('have.value', 'fake@email.com')

  // })

})

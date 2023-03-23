describe('Example test suite hexacta', () => {

  it('Search for elements with multiple results', () => {

    cy.visit("/")

    cy.title().should('eq','Nearshore Software Development Company | Hexacta')

    cy.fixture("index").then((index)=>{

      cy.get(index.searchBox).click()

      cy.get(index.searchField).type('qa automation{enter}')

    })

    cy.fixture("searchResult").then((searchResult)=>{

      cy.get(searchResult.title).should('contain','qa automation')

    })

  })

})

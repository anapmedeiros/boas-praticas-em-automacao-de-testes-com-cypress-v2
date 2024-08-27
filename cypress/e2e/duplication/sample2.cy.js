describe('Code duplication bad practice - repetitive tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()
  })

  const Tearms = ['reactjs', ' vuejs','angulajs']
  Tearms.forEach(Tearms  => {
    it('searches for "${Tearms}"', () => {
    cy.search(Tearms)
      
    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
    })
  })
})

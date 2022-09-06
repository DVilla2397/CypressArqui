describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    
  })
  it('Check fields are filled correctly', () => {
    cy.get('input#nombre').type('Deivis')
    cy.get('input#edad').type('25')
    cy.get('input#email').type('Prueba@ejemplo.com')
    cy.get('input#password').type('123456')
    cy.get('input#verpassword').type('123456')
    cy.get('.Button').click()
  
  })
  it('Field nombre is filled wrongly', () =>{
    cy.get('input#nombre').type('Deivis1')
    cy.expect('input#nombre').to.have.string('input#nombre')
    cy.get('input#edad').type('25')
    cy.get('input#email').type('Prueba@ejemplo.com')
    cy.get('input#password').type('123456')
    cy.get('input#verpassword').type('123456')
    cy.get('.Button').click()
  })

  it('Field edad is filled wrongly', () =>{
    cy.get('input#nombre').type('Deivis')
    cy.get('input#edad').type('125')
    cy.get('input#edad').invoke('text').should('match', /^[0-100]*$/)
    cy.get('input#email').type('Prueba@ejemplo.com')
    cy.get('input#password').type('123456')
    cy.get('input#verpassword').type('123456')
    cy.get('.Button').click()
  })
})


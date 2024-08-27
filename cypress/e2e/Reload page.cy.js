describe('Refresh page',()=>{
    it('Refresh page',()=>{
        cy.visit('http://www.amazon.ae')
        cy.contains('Best Sellers').should('be.visible')
        cy.reload()
        cy.contains('Best Sellers').should('be.visible')

        //cy.reload(true)
        //cy.contains('Best Sellers').should('be.visible')

        //cy.reload({timeout:10000})
        //cy.contains('Best Sellers').should('be.visible')
    })
})
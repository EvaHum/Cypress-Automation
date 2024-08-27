describe('Scroll Test',()=>{
it('Scroll Test',()=>{
cy.visit ('https://naveenautomationlabs.com/opencart/')
cy.scrollTo('bottom')
cy.wait(3000)
cy.scrollTo('top')
cy.wait(2000)
cy.scrollTo(500,300)

})

})
describe('Zero Delay Timing', ()=> {
    it(' Zero Delay', ()=> 
    {
      cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo')
      //cy.get("#user-message").type("Test Automation using Cypress") ---this is 10s by default
     cy.get("#user-message").type("Test Automation using Cypress", {delay:0})
    }
    )
}
)
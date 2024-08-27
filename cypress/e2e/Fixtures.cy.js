describe('Fixtures', ()=>{

    let data //Initialize the variable data
    before (()=> {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')     
    cy.fixture('login').then((value)=> {  //Load the date from the login.json file present inside the fixtures folder
        data=value
    })
    })
    // Start the test case
    it('Login using fixture data', ()=> {
        cy.get ('input[name="email"]').type(data.email) //Enter the email
        cy.get ('input[name="password"]').type(data.password) //Enter the password
        cy.get ('input[type="submit"]').click() //Click on Submit button

    })
})
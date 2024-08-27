describe('Login Suite', ()=>{

    it('RS 1st TestCase', ()=>{

        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('prd')
        cy.get('@prd').find('.product').should('have.length',4)

      cy.get('@prd').find('.product').eq(0).contains('ADD TO CART').click()
      cy.log ('Add to Cart clicked succesfully')

      cy.get('@prd').find('.product').each(($el,index,$list)=>{
        const textveg=$el.find('.product-name').text()
        cy.log(textveg)

         if(textveg.includes('Cashews'))
         {
            cy.wrap($el).find('button').click()
         }   
        })
        cy.get('.brand.greenLogo').should('have.text','GREENKART') 
       
        cy.get('.brand').then(function(logo)
        {
         cy.log(logo.text())
        }) 
        })
    })
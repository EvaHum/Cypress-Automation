describe ('Bosonozka bare', ()=>{
    it ('Keen', ()=>{

        cy.visit ('https://www.bosonozka.cz/barefoot-detska-obuv/')
        cy.get ('.persoo-ac__input').type ('Keen')

    })
})
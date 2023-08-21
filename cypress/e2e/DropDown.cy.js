describe ('handle dropdowns', () =>{

    it.skip('Dropdown with select', ()=>{


        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
        .select('Italy')
        .should ('have.value','Italy')
    
    })

    it.skip('Dropdown without select', ()=>{


        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Japan').type('{enter}')

        cy.get('#select2-billing_country-container')
        .should('have.text','Japan')
    
    })

    it('Auto suggest dropdown ', ()=>{


        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    
    })



})


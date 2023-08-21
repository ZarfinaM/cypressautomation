

describe("Check UI Elements", ()=>{

/*it("Checking Radio Buttons", ()=>{

cy.visit("https://demoqa.com/radio-button")

// visibility radio buttons

cy.get("#yesRadio").should('be.visible')
cy.get("#noRadio").should('be.visible')


//selecting radio buttons

cy.get("#yesRadio").check().should('be.checked')
cy.get("#noRadio").should('not.be.checked')


})*/

it("Checking Check Boxes", ()=>{

    cy.visit("https://artoftesting.com/samplesiteforselenium")
    
    //visibility of the element
   // cy.get("input[value='Automation']").should('be.visible')

    //selecting single check box

   // cy.get("input[value='Automation']").check().should('be.checked')

    //unselecting check box

   // cy.get("input[value='Automation']").uncheck().should('not.be.checked')

   //selecting all check boxes

   //cy.get('input[type="checkbox"].Automation, input[type="checkbox"].Performance').check().should('be.checked')

   //cy.get('input[type="checkbox"].Automation, input[type="checkbox"].Performance').uncheck().should('not.be.checked')

   //selecting first and last

   cy.get('input[type="checkbox"].Automation, input[type="checkbox"].Performance').first().check()
   cy.get('input[type="checkbox"].Automation, input[type="checkbox"].Performance').last().check()
    
})

})
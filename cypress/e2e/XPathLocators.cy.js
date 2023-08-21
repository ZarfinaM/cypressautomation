describe('XPathLocators',()=>{



it('find no of products', ()=>{

    cy.visit("https://www.automationexercise.com/")

    cy.xpath("//a[@href='/brand_products/H&M']//span[@class='pull-right'][normalize-space()='(5)']/li").should('have.length', 5)
})


it('chained xpath', ()=>{

    cy.visit("https://www.automationexercise.com/")

    cy.xpath("//a[@href='/brand_products/H&M']//span[@class='pull-right'][normalize-space()='(5)']").xpath("./li").should('have.length', 5)
})



})
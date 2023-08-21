

describe('CSSLocators', () =>{

    it("csslocators", () =>{

        cy.visit("https://www.automationexercise.com/products")

        //cy.get("#search_product").type("Blue Top")    //id    tag is optional
        cy.get("[name='search']").type("Blue Top")      //attribute locator
        

        cy.get("#submit_search").click()

        cy.get(".title.text-center").contains("SEARCHED PRODUCTS")    // class locator  Assertion



    })
})
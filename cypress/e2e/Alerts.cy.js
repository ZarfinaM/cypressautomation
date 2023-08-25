describe("Alerts", () => {

    // 1. Javascript Alert: It will have some text and an 'ok' button

it.skip('Js alert', ()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsAlert()']").click();
     
    cy.on('window:alert', (t)=>{
        expect(t).to.contains('I am a JS Alert');

    })

    // alert window automaticlly closed by cypress

    cy.get("#result").should('have.text', 'You successfully clicked an alert')


})
    // 2. Java script confirm Alert: It will have some text with'ok' and 'cancel' buttons

 
    it.skip('Js confirm alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })

       
            //Cypress automaticlly closed alert window by using ok button-default

            cy.get("#result").should('have.text', 'You clicked: Ok')


    })

    it.skip('Js confirm alert - Cancel', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })

            cy.on('window:confirm', (t)=>false); // cypress closes alert window using cancel button


            cy.get("#result").should('have.text', 'You clicked: Cancel')


    })


    // 3. Java script Prompt Alert: It will have some text with a text box foe user input along with 'ok'
    it.skip('Js prompt alert - Cancel', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
        cy.window().then((win)=>{

        cy.stub(win,'prompt').returns('welcome');

        })

        cy.get("button[onclick='jsPrompt()']").click();

        // cypress will automatically close prompted alert - it will use OK button - by default

        //cy.on('window:prompt', (t)=>false); // cancel button

        cy.get("#result").should('have.text', 'You entered: welcome')

    })

    

    // 4. Authenticated Alert
    it.only('Js authenticated alert - Cancel', ()=>{
        //approach 1
      /*  cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:                         
                                                                     {
                                                                        username:"admin",
                                                                        password:"admin"
                                                                     }
                                                                  } );
        cy.get("div[class='example'] p").should('have.contain', "Congratulations!")

        */

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain', "Congratulations!")
    

    })




})



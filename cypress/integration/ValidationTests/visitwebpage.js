/// <reference types="cypress" />

describe("Visit",function() {
    it("visitgoogle",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('#root > div > header > div > div.search > form > input').type("ca")
        cy.get('button.search-button').click()
        // cy.get('div[class="sg-col-inner"]').should('have.length',187)
        cy.wait(2000)
        cy.get('.product:visible').contains("ADD TO CART") //to find the text in the elemnet 
        cy.get('.product:visible').eq(2).find('h4.product-name').should('have.text','Capsicum') 

        
        cy.get('.product:visible').each((ele,index,$list)=>{
            console.log(ele.text())  //to get the text
            // .text() is not a cypress command, it is jQuery command which is used by cypress
        })

        // Handling the asynchronous nature of cypress by using then() method
        cy.get('.brand').then((logo)=>{
            cy.log(logo.text())
        })
        
    })
})
/// <reference types="cypress" />

import ShoppingPage from "../../support/pageObjects/ShoppingPage.js"

describe("Shopping Page Test",function() {

    beforeEach(function(){
        cy.fixture('data').then((data)=>{
            this.data=data;
        })
    })

    it("Check Whether number of phone shopped is equal to checkout box text ",function(){
        cy.visit(Cypress.env("url")+"/angularpractice/shop") 
        for(let i=0;i<this.data.producttoshop.length;i++){
             //Here we are using customCommand named as selectProduct() which we have written 
            // in command.js file under support folder
            cy.selectProduct(this.data.producttoshop[i])
        }
        ShoppingPage.getCheckoutButton().then(element=>{
            expect(element.text().includes(String(this.data.producttoshop.length))).true
        })
    })
})
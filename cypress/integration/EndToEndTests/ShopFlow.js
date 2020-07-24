/// <reference types="cypress" />

import ShoppingPage from "../../support/pageObjects/ShoppingPage.js"
import CartPage from "../../support/pageObjects/CartPage.js"

describe("Shopping End to End Flow",function() {

    beforeEach(function(){
        cy.fixture('data').then((data)=>{
            this.data=data;
            this.NumberOfProducts=data.producttoshop.length
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
            this.Number
            expect(element.text().includes(String(this.data.producttoshop.length))).true
            
        })
        //Going to cart page
        ShoppingPage.getCheckoutButton().click()
    })

    it("Check Number of Products is equal to the number of products added in the cart  ",function(){
    CartPage.getNumberofProducts().should('have.length',this.NumberOfProducts)
    })

    it("Validate the sum of price of products is equal to total price ",function(){
        let sum=0
        CartPage.getPriceElements().each((element,index,list)=>{
            let tempPrice=element.text().split(" ")[1]
            sum=Number(sum)+Number(tempPrice)
        })
        let totalPrice=0
        CartPage.getTotalPriceElement().then((ele)=>{
            totalPrice=ele.text().split(" ")[1]
            expect(Number(totalPrice)).to.equal(sum)
            
        })
    })
})
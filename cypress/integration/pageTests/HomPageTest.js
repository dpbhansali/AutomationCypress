/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage"

describe("user form",function() {

    beforeEach(function(){
        cy.fixture('data').then((data)=>{
            this.data=data.userdata;
        })
    })

    it('Verify "Form Submission" is sucessful.', function() {
        
        cy.wrap(this.data).each((data,index,array)=>{

            cy.visit(Cypress.env('url')+"/angularpractice/") 
            const name=data.name
            let email=data.email
            let password=data.password
            let gender=data.gender
            let birthdate=data.birthdate

            HomePage.getNameInputBox().type(name)
            HomePage.getEmailInputBox().type(email)
            HomePage.getPasswordInputBox().type(password)
            HomePage.getIceCreamCheckBox().check()
            HomePage.getGenderDropdown().select(gender)
            HomePage.getBindingBox().should('have.value',name)
            
            //To check if the attribute value is 2 or not in an element
            HomePage.getNameInputBox().should('have.attr','minlength',2)

            //to check if button is disabled or not
            HomePage.getRadioButton().should('be.disabled')
            HomePage.getBirthDateBox().type(birthdate)
            HomePage.getSubmitButton().click()
            HomePage.getPopUp().then((str)=>{
                expect(str.text().includes("Success")).true
        })

      })
    })

     

})
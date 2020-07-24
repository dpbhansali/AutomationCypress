class HomePage{
    static getNameInputBox(){
        return cy.get("input[name='name']:nth-child(2)")
    }
    static getEmailInputBox(){
    return cy.get("input[name='email']")
    }

    static getPasswordInputBox(){
        return cy.get("input[type='password']")
    }
    static getGenderDropdown(){
        return cy.get("#exampleFormControlSelect1")
    }
    static getBindingBox(){
        return cy.get("input[name='name']:nth-child(2)")
    }
    static getRadioButton(){
        return cy.get('#inlineRadio3')
    }
    static getIceCreamCheckBox(){
        return cy.get("input.form-check-input[id='exampleCheck1']")
    }
    static getBirthDateBox(){
        return cy.get("input[name='bday']")
    }
    static getSubmitButton(){
        return cy.get('.btn')
    }
    static getPopUp(){
        return cy.get('.alert')
    }
}
export default HomePage;
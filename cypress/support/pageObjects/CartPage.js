class CartPage{
    static getNumberofProducts(){
        return cy.get("tbody  tr  td.col-sm-8.col-md-6")
    }
    static getPriceElements(){
        return cy.get("tbody  tr  td:nth-child(4) strong")
    }
    static getTotalPriceElement(){
        return cy.get("tbody  tr  td:nth-child(5) strong")
    }

}
export default CartPage
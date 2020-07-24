class ShoppingPage{
    static getCheckoutButton(){
        return cy.get("a.nav-link.btn.btn-primary")
    }
}
export default ShoppingPage
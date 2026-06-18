class CartPage {

addBackpack(){

cy.get(
'[data-test="add-to-cart-sauce-labs-backpack"]'
)
.click()

}

openCart(){

cy.get(
'[data-test="shopping-cart-link"]'
)
.click()

}

validateItem(){

cy.get(
'.inventory_item_name'
)

.should(
'contain',
'Sauce Labs Backpack'
)

}

}

export default new CartPage()
class InventoryPage {

    elements = {
        inventoryItems: '.inventory_item',
        inventoryContainer: '#inventory_container',
        pageTitle: '.title',
        shoppingCartBadge: '.shopping_cart_badge'
    }

    verifyInventoryLoaded() {
        cy.get(this.elements.inventoryContainer)
            .should('be.visible')
    }

    verifyPageTitle() {
        cy.get(this.elements.pageTitle)
            .should('have.text', 'Products')
    }

    getInventoryItems() {
        return cy.get(this.elements.inventoryItems)
    }

    getProductName() {
        return cy.get(".inventory_item_name")
    }

    getAddToCartButtons() {
    return cy.get('[data-test^="add-to-cart"]')
    }

    selectSortOption(option) {
    cy.get('[data-test="product-sort-container"]')
        .select(option)
    }

}

export default new InventoryPage()
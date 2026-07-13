import LoginPage from "../../pages/LoginPage"
import InventoryPage from "../../pages/InventoryPage"

describe("Inventory", () => {

    beforeEach(function () {

        cy.fixture("users").then((users) => {

        LoginPage.visit()

        LoginPage.login(
            users.validUser.username,
            users.validUser.password
        )

        })

    })


    it("should display all products", function () {

        InventoryPage.verifyInventoryLoaded()

        InventoryPage.verifyPageTitle()

        InventoryPage
            .getInventoryItems()
            .should("have.length", 6)

    })

    it("should display all products names", function (){

        const expectedProducts = [
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt",
        "Sauce Labs Fleece Jacket",
        "Sauce Labs Onesie",
        "Test.allTheThings() T-Shirt (Red)"
        ]

        InventoryPage.getProductName().then(($products) => {
            const productNames = [...$products].map(product => product.innerText)
            expect(productNames).to.deep.equal(expectedProducts)
        })

    })

    

})
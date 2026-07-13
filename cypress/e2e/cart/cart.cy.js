import LoginPage from "../../pages/LoginPage"
import CartPage from "../../pages/CartPage"

describe("Cart", () => {

let users

beforeEach(() => {

cy.fixture("users")
.then((data) => {

users = data

LoginPage.visit()

LoginPage.login(

users.validUser.username,

users.validUser.password

)

})

})

it("should add product to cart", () => {

CartPage.addBackpack()

CartPage.openCart()

CartPage.validateItem()

})

})
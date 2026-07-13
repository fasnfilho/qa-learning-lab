import LoginPage
from "../pages/LoginPage"

describe("Login", () => {

    beforeEach(function () {

        cy.fixture("users").as("users")

        LoginPage.visit()

it(
"should login successfully",

function(){

LoginPage.visit()

LoginPage.login(

this.users.validUser.username,

this.users.validUser.password

)

cy.url()

.should(

"include",

"inventory"

)

}

)

it(
"should reject invalid login",

function(){

LoginPage.visit()

LoginPage.login(

this.users.invalidUser.username,

this.users.invalidUser.password

)

cy.get(
'[data-test="error"]'
)

.should(
"exist"
)

})

})
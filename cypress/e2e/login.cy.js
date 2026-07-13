import LoginPage
from "../pages/LoginPage"

describe("Login", () => {

    beforeEach(function () {

        cy.fixture("users").as("users")

        LoginPage.visit()

    })

    it("should login successfully", function () {

        LoginPage.login(
            this.users.validUser.username,
            this.users.validUser.password
        )

        LoginPage.verifyLoginSuccess()

    })

    it("should reject invalid login", function () {

        LoginPage.login(
            this.users.invalidUser.username,
            this.users.invalidUser.password
        )

        LoginPage.verifyErrorMessage("Epic sadface: Username and password do not match any user in this service")

    })

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
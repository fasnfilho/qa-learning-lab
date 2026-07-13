import LoginPage from "../../pages/LoginPage"

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

    it("should display an error when username and password are empty", function () {

        LoginPage.clickLogin()

        LoginPage.verifyErrorMessage("Epic sadface: Username is required")

    })

    it("should display an error when password is empty", function () {

        LoginPage.typeUsername(
            this.users.validUser.username
        )

        LoginPage.clickLogin()

        LoginPage.verifyErrorMessage("Epic sadface: Password is required")

    })

    it("should display an error when username is empty", function () {

        LoginPage.typePassword(
            this.users.validUser.password
        )

        LoginPage.clickLogin()

        LoginPage.verifyErrorMessage("Epic sadface: Username is required")

    })

    it("should not allow a locked user to log in", function () {

        LoginPage.login(
            this.users.lockedUser.username,
            this.users.lockedUser.password
        )

        LoginPage.verifyErrorMessage("Epic sadface: Sorry, this user has been locked out.")

    })

})
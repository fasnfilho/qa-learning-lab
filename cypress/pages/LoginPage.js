class LoginPage {

    visit() {
        cy.visit('/')
    }

    typeUsername(username) {
        cy.get('#user-name').type(username)
    }

    typePassword(password) {
        cy.get('#password').type(password)
    }

    clickLogin() {
        cy.get('#login-button').click()
    }

    login(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
    }

    getErrorMessage() {
    return cy.get('[data-test="error"]')
    }

    verifyLoginSuccess() {
    cy.url().should('include', '/inventory.html')
    }

}

export default new LoginPage()
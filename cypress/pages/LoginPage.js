class LoginPage {

    elements = {
        usernameInput: '#user-name',
        passwordInput: '#password',
        loginButton: '#login-button',
        errorMessage: '[data-test="error"]'
    }

    visit() {
        cy.visit('/')
    }

    typeUsername(username) {
        cy.get(this.elements.usernameInput).type(username)
    }

    typePassword(password) {
        cy.get(this.elements.passwordInput).type(password)
    }

    clickLogin() {
        cy.get(this.elements.loginButton).click()
    }

    login(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
    }

    getErrorMessage() {
        return cy.get(this.elements.errorMessage)
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory.html')
    }

}

export default new LoginPage()
<div align="center">

# QA Learning Lab

### A professional end-to-end test automation project built with Cypress.

[![Cypress](https://img.shields.io/badge/Cypress-Test_Automation-69D3A7?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>

</div>

---

# 📖 About

QA Learning Lab is a professional test automation project built to demonstrate practical Quality Assurance skills using Cypress.

Instead of focusing only on writing automated tests, this project applies software engineering best practices such as Page Object Model (POM), reusable components, test organization, maintainability and documentation.

The project simulates how automated testing is commonly structured in real software development teams.

---

# 🎯 Objectives

- Develop maintainable automated tests
- Apply the Page Object Model pattern
- Organize scalable test suites
- Use Fixtures for test data
- Improve code readability
- Demonstrate QA best practices
- Create professional project documentation
- Prepare the project for Continuous Integration

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Cypress | End-to-End Testing |
| JavaScript | Test Development |
| Node.js | Runtime |
| Fixtures | Test Data |
| Page Object Model | Test Architecture |
| Git | Version Control |
| GitHub | Repository Management |

---

# 📂 Project Structure

```text
qa-learning-lab

├── cypress
│
├── e2e
│   ├── login.cy.js
│   ├── cart.cy.js
│   └── checkout.cy.js
│
├── fixtures
│
├── pages
│
├── support
│
└── reports
│
├── docs
│
├── assets
│
├── package.json
│
└── README.md
```

---

# 🏗 Architecture

The project follows the **Page Object Model (POM)** design pattern.

```text
Test

↓

Page Object

↓

Application

↓

Assertions
```

This approach improves:

- Code organization
- Reusability
- Readability
- Maintainability
- Scalability

---

# ✅ Automated Scenarios

## Login

- Successful Login
- Invalid Credentials
- Locked User
- Empty Username
- Empty Password
- Empty Credentials

---

## Cart

- Add Product
- Remove Product
- Multiple Products
- Empty Cart Validation

---

## Checkout

- Complete Purchase Flow
- Required Fields Validation
- Cancel Checkout
- Successful Checkout

---

# 🚀 Getting Started

## Clone repository

```bash
git clone https://github.com/fasnfilho/qa-learning-lab.git
```

## Install dependencies

```bash
npm install
```

## Run Cypress

Interactive Mode

```bash
npx cypress open
```

Headless Mode

```bash
npx cypress run
```

---

# 📊 Test Strategy

The project prioritizes:

- Functional Testing
- Positive Scenarios
- Negative Scenarios
- Smoke Testing
- UI Validation
- Data Isolation
- Maintainable Test Design

---

# 📁 Documentation

Project documentation is available in the `/docs` folder.

- Test Strategy
- Test Cases
- Bug Reports
- Architecture
- Roadmap

---

# 🔄 CI/CD

Future versions will include GitHub Actions for automatic execution of the test suite on every push and pull request.

---

# 📈 Roadmap

- [x] Login Automation
- [x] Cart Automation
- [ ] Checkout Automation
- [ ] Custom Commands
- [ ] API Testing
- [ ] Test Reports
- [ ] GitHub Actions
- [ ] Docker Support
- [ ] Allure Reports

---

# 📸 Project Demonstration

Future versions will include:

- Demo GIF
- Screenshots
- Test Reports
- Execution Video

---

# 📚 Learning Outcomes

This project was created to improve practical experience with:

- Test Automation
- Cypress
- Software Quality Assurance
- Page Object Model
- Test Organization
- Clean Code
- Version Control
- Continuous Learning

---

# 👨‍💻 Author

**Fábio Agostinho**

Computer Engineering Student @ UFC

Quality Assurance | Test Automation

- LinkedIn: https://linkedin.com/in/fabio-agostinho
- GitHub: https://github.com/fasnfilho

---

# ⭐ If you found this project useful, consider giving it a Star!

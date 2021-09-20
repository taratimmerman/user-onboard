// users.spec.js created with Cypress

describe('User Onboarding App', () => {
    //start tests with a blank slate
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    // Element variables
    const pageTtl = () => cy.get('#pageTtl');
    const newUsrBtn = () => cy.get('#newUsrBtn');
    const usersSctn = () => cy.get('#usersSctn');
    const formSctn = () => cy.get('#formSctn');
    const nameInput = () => cy.get('#name');
    const emailInput = () => cy.get('#email');
    const passwordInput = () => cy.get('#password');
    const submitBtn = () => cy.get('#submitBtn');
    const cancelBtn = () => cy.get('#cancelBtn');
    const designLnk = () => cy.get('#designLnk');
    const gitHubLnk = () => cy.get('#gitHubLnk');

    describe('Check proper elements exist', () => {
        it('verify each element', () => {
            pageTtl()
                .should('exist');
            newUsrBtn()
                .should('exist');
            usersSctn()
                .should('exist');
            formSctn()
                .should('exist');
            nameInput()
                .should('exist');
            emailInput()
                .should('exist');
            passwordInput()
                .should('exist');
            submitBtn()
                .should('exist');
            cancelBtn()
                .should('exist');
            designLnk()
                .should('exist');
            gitHubLnk()
                .should('exist');
        });
    });
});
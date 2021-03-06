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
    const roleSelect = () => cy.get('#role');
    const tosCheckBox = () => cy.get('[type="checkbox"]');
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
            newUsrBtn()
                .click();
            formSctn()
                .should('exist');
            nameInput()
                .should('exist');
            emailInput()
                .should('exist');
            roleSelect()
                .should('exist');
            tosCheckBox()
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

    describe('adding a system user and deleting it', () => {
        it('can create a user and delete it', () => {
            cy.contains(/test user/i).should('not.exist');
            newUsrBtn()
                .click();
            nameInput()
                .type('Test User');
            emailInput()
                .type('testuser@testemail.com');
            roleSelect()
                .select('admin');
            tosCheckBox()
                .check();
            submitBtn()
                .click();
            cy.contains(/test user/i)
                .should('exist');
            cy.contains(/test user/i)
                .next()
                .next()
                .next()
                .click();
            cy.contains(/test user/i).should('not.exist');
            newUsrBtn()
                .click();
        });
    });
});
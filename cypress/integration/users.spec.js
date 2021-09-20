describe('User Onboarding App', () => {
    //start tests with a blank slate
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    // Element variables
    const pageTtl = () => cy.get('#pageTtl');

    describe('Check proper elements exist', () => {
        it('verify each element', () => {
            pageTtl()
                .should('exist');
        });
    });
});
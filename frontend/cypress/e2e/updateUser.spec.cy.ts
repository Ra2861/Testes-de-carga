describe('Update User Form E2E Test', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3000/employer/customer').as('fetchUsers');
        cy.visit('localhost:5173/home/update-user');
        cy.wait('@fetchUsers');
    });

    it('should allow selecting a user by name and autofill the form', () => {
        cy.get('[data-cy=user-select]').select('John Doe');
    });

    it('should submit the updated user information', () => {
        cy.get('[data-cy=user-select]').select('John Doe');
        cy.get('[data-cy=input-name]').clear().type('Novo Nome');
        cy.get('[data-cy=input-phoneNumber]').clear().type('123456789');
        cy.get('[data-cy=input-age]').clear().type('30');
        cy.get('[data-cy=input-email]').clear().type('novoemail@example.com');
        cy.get('[data-cy=submit-button]').click();
    });
});

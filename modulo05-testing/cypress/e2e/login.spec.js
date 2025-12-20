describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('http://localhost:8080');
  });
  it('should name input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.get('input[name="name"]').click();

    // Assert
    cy.get('input[name="name"]').should('have.focus');
  });
});

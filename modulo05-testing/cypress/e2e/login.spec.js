describe('Login specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should user input has the focus when it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.get('input[name="user"]').click();

    // Assert
    cy.get('input[name="user"]').should('have.focus');
  });
  it('should validate empty fields', () => {
    // Act - click on login button without fill the fields
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert - verify the error message
    cy.contains('Debe informar el campo').should('be.visible');
  });
  it('should login with invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const pswd = 'wrongpswd';
    // Act - fill the fields with invalid credentials and click on login button
    cy.get('input[name="user"]').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(pswd);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert - verify the url and the error message
    cy.url().should('not.include', '/submodule-list');
    cy.contains('Usuario y/o password no válidos').should('be.visible');
  });
  it('should login with valid credentials', () => {
    // Arrange
    const user = 'admin';
    const pswd = 'test';

    // Act - fill the fields with valid credentials and click on login button
    cy.get('input[name="user"]').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(pswd);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert - verify the values and the url
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', pswd);
    cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
    cy.location('hash').should('equal', '#/submodule-list');
  });
});

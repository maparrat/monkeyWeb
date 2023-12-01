import {faker} from '@faker-js/faker';

Cypress.Commands.add('login', () => {

 cy.visit('http://localhost:2368/ghost/');

  cy.get('#identification').type('miguel1999parra@gmail.com'); 
  cy.get('#password').type('zbyHRuEWC6j.m*_a'); 

  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/dashboard'); 

  cy.wait(2000);
});



// GIVEN: User is logged in
describe('Modificar el campo contraseña en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the password field with a known value
  it('Modifica el campo contraseña y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides the known old password
    const oldPassword = 'zbyHRuEWC6j.m*_a';
    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    // WHEN: User clicks on the "Change Password" button
    cy.contains('Change Password').click();

 

    // THEN: The password should be successfully changed
    cy.wait(5000);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo contraseña en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User attempts to modify the password field with valid random data
  it('Modifica el campo contraseña y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random passwords using faker
    const oldPassword = faker.internet.password();
    const newPassword = faker.internet.password();
    const verifyPassword = faker.internet.password();

    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newPassword);

    cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(verifyPassword);

    // WHEN: User clicks on the "Change Password" button
    cy.contains('Change Password').click();

    cy.wait(5000);

    // THEN: The system should display a message indicating that new passwords do not match
    cy.contains('Your new passwords do not match');
  });
});

// GIVEN: User is logged in
describe('Modificar el campo contraseña en la página de configuración de personal [Dato aleatorio valido - Palabras]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User attempts to modify the password field with valid random words
  it('Modifica el campo contraseña y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random words using faker
    const oldPassword = faker.word.words();
    const newPassword = faker.word.words();
    const verifyPassword = faker.word.words();

    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newPassword);

    cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(verifyPassword);

    // WHEN: User clicks on the "Change Password" button
    cy.contains('Change Password').click();

    cy.wait(5000);

    // THEN: The system should display a message indicating that new passwords do not match
    cy.contains('Your new passwords do not match');
  });
});

// GIVEN: User is logged in
describe('Modificar el campo website en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the website field with a known value
  it('Modifica el campo website y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides a known website
    const newWebsite = 'https://sistemas.uniandes.edu.co/es/isis';
    cy.get('#user-website').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newWebsite);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The website field should be successfully updated
    cy.get('#user-website').scrollIntoView().should('have.value', newWebsite);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo website en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the website field with valid random data
  it('Modifica el campo website y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates a valid random website using faker
    const newWebsite = faker.internet.url();
    cy.get('#user-website').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newWebsite);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The website field should be successfully updated
    cy.get('#user-website').scrollIntoView().should('have.value', newWebsite);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo website en la página de configuración de personal [Dato aleatorio ]', () => {
    beforeEach(() => {
      // WHEN: User logs in before each test
      cy.login();
    });
  
    // THEN: User attempts to modify the website field with valid random words
    it('Modifica el campo website y verifica el cambio', () => {
      cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
      cy.wait(2000);
  
      // WHEN: User generates valid random words using faker
      const newWebsite = faker.word.words();
      cy.get('#user-website').scrollIntoView()
        .should('be.visible')
        .clear()
        .type(newWebsite);
  
      // WHEN: User clicks on the "Save" button
      cy.contains('Save').click();
  
      cy.wait(5000);
  
      // THEN: The system should display a message indicating that the website is not a valid URL
      cy.contains('Website is not a valid url');
    });
  });
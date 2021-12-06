describe('loginTest', function () {
  before(() => {
      cy.visit(Cypress.config("baseUrl"))
    });

    it('check baidu logo exist ', function () {
        cy.get('#lg');
    });

    it('click login button ', function () {
        cy.get('#s-top-loginbtn').click()
    });

    it('input username and password ', function () {
        cy.get('#TANGRAM__PSP_11__userName').type(Cypress.config("username"));
        cy.get('#TANGRAM__PSP_11__password').type(Cypress.config("password"));
        cy.get('#TANGRAM__PSP_11__submit').click();
        cy.get('#TANGRAM__PSP_4__closeBtn').click();
    });
});

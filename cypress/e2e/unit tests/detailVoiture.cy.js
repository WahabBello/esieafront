describe("Vérifier que le détail d'une voiture est correctement affiché", () => {
  it("Afficher le detail de la voiture", () => {
    cy.visit("http://localhost:8080/esieaFront"); // l'URL de notre application

    cy.get("li:nth-of-type(1) > a").click();
    cy.get("tr:nth-of-type(1) a").click();

    cy.get("#contenuVoiture > label").should('be.visible');

  });

});

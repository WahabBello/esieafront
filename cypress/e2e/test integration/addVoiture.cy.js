describe("Ajouter Voiture", () => {
  it("Ce test devrrait ajouter une voiture sans problème", () => {
    cy.viewport(1688, 785);
    cy.visit("http://localhost:8080/esieaFront");
    cy.wait(1000);

    cy.get("#nav li:nth-of-type(2) > a").click();
    cy.get("#marque").should('be.visible').type("TESLA");
    cy.get("#modele").should('be.visible').type("Model T");
    cy.get("#finition").should('be.visible').type("White");
    cy.get("#carburant").should('be.visible').type("W");
    cy.get("#km").should('be.visible').type("9087");
    cy.get("#annee").should('be.visible').type("1899");
    cy.get("#prix").should('be.visible').type("1500");
    cy.get("#nouvelleVoiture").should('be.visible').click();

    cy.wait(1000);

    cy.visit("http://localhost:8080/esieaFront");

    cy.wait(1000);

    cy.get("#saisieRecherche").click();
    cy.get("#saisieRecherche").should('be.visible').type("Tesla");
    cy.get("#sidebar button").click();
    cy.get('#listeVoitureTable tbody tr td').should('contain', 'Model T');
  });
});

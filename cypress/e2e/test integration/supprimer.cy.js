describe("Test de la fonction de suppression dans le tableau", () => {
  it("Devrait supprimer correctement une voiture de la table", () => {
    cy.visit("http://localhost:8080/esieaFront"); // l'URL de notre application

    cy.get("li:nth-of-type(1) > a").click();
    cy.get("tr:nth-of-type(1) a").click();
    // Saisir le terme de recherche dans le champ de recherche
    cy.get("#divSupprimer > button").click();
    cy.get("#saisieRecherche").click();
    cy.get("#saisieRecherche").type("Citroen");
    cy.get("#sidebar button").click();
    cy.get('#listeVoitureTable tbody tr td:contains("Citroen")').should('not.exist');


    // Vous pouvez également vérifier que la voiture supprimée n'est plus dans le tableau
    // cy.get('#listeVoitureTable tbody tr td:contains("Audi")').should("not.exist");
  });

  // Vous pouvez ajouter d'autres tests pour des cas comme la suppression d'autres voitures.
});

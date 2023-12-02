describe('Visite de la page Location de voiture', () => {
  it('Devrait visiter la page d\'accueil et effectuer une action', () => {
      cy.visit('http://localhost:8080/esieaFront'); // l'URL de notre application
  });
});

describe('Test de la fonction de recherche', () => {
  it('Devrait afficher les résultats de la recherche', () => {
    // Visiter la page d'accueil (ou toute autre page contenant la fonction de recherche)
    cy.visit('http://localhost:8080/esieaFront/');

    // Saisir le terme de recherche dans le champ de recherche
    cy.get('#saisieRecherche').type('Audi');

    // Cliquer sur le bouton de recherche
    cy.get("#sidebar button").click();

    // Vérifier que seul le résultat correspondant à "Audi" est affiché
    cy.get('#listeVoitureTable tbody tr td').should('contain', 'Audi');
    // // Vous pouvez également vérifier des détails spécifiques des résultats
  });

});

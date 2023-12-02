// mon-test.spec.js
describe('Visite de la page Location de voiture', () => {
  it('Devrait visiter la page d\'accueil et lister tous les voitures une action', () => {

    cy.visit('http://localhost:8080/esieaFront'); // l'URL de notre application
     cy.wait(1000);

    cy.get('#listeVoitureTable tbody tr').should('have.length', 5);

  });
});

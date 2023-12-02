describe('API Tests', () => {
  it('Recuperer la liste des voitures depuis le backend', () => {
    cy.visit('http://localhost:8080/esieaFront');
    cy.request('GET', 'esieaBack/rest/voiture/get/all')
      .then((response) => {
        expect(response.status).to.equal(200);
//        expect(response.body).to.have.length.greaterThan(0);
      });
  });
    it('Ajout de voiture ', () => {
      cy.visit('http://localhost:8080/esieaFront');
      cy.request({
        method: 'POST',
        url: 'esieaBack/rest/voiture/add', // Remplacez par l'URL de votre endpoint
        headers: {
          'Content-Type': 'application/json', // Définissez le type de contenu approprié
        },
        body: JSON.stringify({
            marque: "Toyota",
            modele: "Model Bello",
            finition: "VIOLET",
            carburant: "D",
            km: "10011",
            annee: "2500",
            prix: "56200"
        }),
      })
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });
});
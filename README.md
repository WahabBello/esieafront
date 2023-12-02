# Application Front Stock Car
Ce projet contient le code de la partie Front du projet Stock Car. Il est composé de code HTML, CSS et JavaScript intéragissant avec la partie Back.

# Prérequis
1. Installer en premier la partie Back de l'application Stock Car


# Installation

1. Déployer le fichier War (dans target) dans un serveur d'application (Tomcat)
2. Modifier le fichier de configuration situé dans webapps/esieaFront/conf.js (notamment l'url vers le Back)
3. Tester le fonctionnement de l'application en ouvrant l'application : http://localhost:8080/esieaFront
4. Un ensemble de voitures apparaissent dans le tableau


# Test

Pour tester notre application avec cypress, il faut d'abord installer Nodejs.

Assurez-vous que Cypress est correctement installé dans votre projet. Si ce n'est pas déjà le cas, vous pouvez l'installer en utilisant npm ou yarn :

### Utilisation de npm
```npm install cypress --save-dev ``` 

Ouvrez votre terminal et accédez au répertoire de votre projet où se trouve le fichier de configuration Cypress (cypress.json).

Exécutez la commande suivante pour lancer tous les tests Cypress en mode headless (sans interface graphique) :

```npx cypress run```
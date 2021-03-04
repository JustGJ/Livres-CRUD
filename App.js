import React, { Component } from 'react';
import Bouton from './components/Bouton/Bouton';
import TitreH1 from './components/Titres/TitreH1';
import Livres from './containers/Livres/Livres';


class App extends Component {
  
    render() {
      return (
        <div className="container">
            <TitreH1>Pages listant des livres</TitreH1>
            <div>Livres</div>
            <Bouton typeBtn="btn-success" clic={() => console.log("Ajout")}>Ajouter</Bouton>
            <Bouton typeBtn="btn-warning" clic={() => console.log("Modifier")}>Modifier</Bouton>
            <Bouton typeBtn="btn-danger" clic={() => console.log("Supprimer")}>Supprimer</Bouton>
        </div>
  )}
}

export default App;

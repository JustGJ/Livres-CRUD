import react, { Component } from 'react';

class Livres extends Component {
    state= {
        livres : [
            {id:1, titre: "L'algorithmique selon H2PROG", auteur: "Matthieu GASTON", nbPages : "200"},
            {id:2, titre: "La France du 19ème", auteur: "Albert Patrick", nbPages: "500"},
            {id:3, titre: "Le monde des animaux", auteur: "Marc Merlin", nbPages : "250"},
            {id:4, titre : "Le virus d'Asie", auteur : "Tya Milo", nbPages : "120"}
        ],
  
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Livres;
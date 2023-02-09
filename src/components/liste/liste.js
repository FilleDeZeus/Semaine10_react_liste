import React, {useState} from 'react'
import './public/liste.css'

export const Liste = () => {
        //Liste de taches
        const [taches, setTaches] = useState([]);
        //La nouvelle tache 
        const [newTache, setNewTache] = useState("");

        //fonction qui va pemettre de rajoutr une nouvelle tache à la liste
        const Ajout = (element) => {
            //annule le rechargement page
            element.preventDefault();
            //la nouvelle tache est rajouté au reste des taches
            setTaches(taches.concat(newTache));
            //vide l'input
            setNewTache("");
        };
        return (
            <div>
                <h3>Liste de tâches</h3>
                <ul>
                    {/* map permet de pacourir tout les elements du tab et creer un nouveau tableau qui contient un li pour chaque tache   */}
                    {taches.map((tache) => (
                        <li>{tache}</li>
                    ))}
                </ul>
            {/* ajout de la fonction sur mon formualaire */}
            <form onSubmit={Ajout}>
                <input
                    //type de l'input
                    type="text"
                    //etat de l'input
                    value={newTache}
                    //quand l'input change, j'appelle la fonction et l'etat de la nouvelle page change
                    onChange={(element) => setNewTache(element.target.value)}
                />
                
                <button type="submit">Ajouter une tâche</button>
            </form>
        </div>
    );
};

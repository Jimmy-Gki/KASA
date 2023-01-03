import { Navigate, useParams } from "react-router-dom";
import API from "../../API.json";
import Slideshow from "../../components/Slideshow/slideshow";

export default function Fiche () {

//Récupérer la fiche correspondante en créant une nouvelle route à partier de l'URL actuel
const {lodgingId} = useParams();
console.log(lodgingId);
//On récupère les données de l'appartement selectionné en vérifiant que l'ID selectionné correspond à la fiche récupérée
const ficheLogement = API.find((ficheLogement) => ficheLogement.id === lodgingId);

    return (
        <>
        {ficheLogement ? ( //S'il n'y a pas d'erreur, alors on affiche le contenu de la page
            <div className="ficheContainer">
                <Slideshow key={ficheLogement.pictures} images={ficheLogement.pictures} />
            </div>
        ) : ( <Navigate replace to="/NotFound" /> //Sinon on renvoie l'utilisateur vers la page d'erreur
            )
        }
        </>
    )
}
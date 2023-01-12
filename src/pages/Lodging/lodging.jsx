import { Navigate, useParams } from "react-router-dom";
import API from "../../API.json";
import Slideshow from "../../components/Slideshow/slideshow";
import LodgingDetails from "../../components/LodgingsDetails/lodgingsDetails";
import Collapse from "../../components/Collapse/collapse"
import "../Lodging/lodgingModule.scss";

export default function Fiche () {

//Récupérer la fiche correspondante en créant une nouvelle route à partier de l'URL actuel
const logementId = useParams();
console.log(logementId);
//On récupère les données de l'appartement selectionné en vérifiant que l'ID selectionné correspond à la fiche récupérée
const logement = API.find((ficheLogement) => ficheLogement.id === logementId.id);
console.log(logement)

    return (
        <>
        {logement ? ( //S'il n'y a pas d'erreur, alors on affiche le contenu de la page
            <div className="ficheContainer">
                <Slideshow key={logement.pictures} images={logement.pictures} />
                <LodgingDetails key={logement.title} details={logement} />
                <div className="collapseLodging">
                    <Collapse key={logement.description} title="Description" text={logement.description} />
                    <Collapse key={logement.equipments} title="Equipments" text={logement.equipments.map((infos, index) => (
                        <div key={`${logement.equipments}-${index}`}>{infos}</div>
                        ))}
                    />
                </div>
            </div>
        ) : ( <Navigate replace to="/NotFound" /> //Sinon on renvoie l'utilisateur vers la page d'erreur
            )
        }
        </>
    )
}
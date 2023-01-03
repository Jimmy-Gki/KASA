import React from "react";
import "./lodgingsDetailsModule.scss";
import emptyStar from "../Images/empty-star.png";
import fullStar from "../Images/full-star.png";

function LodgingDetails ({details}) {

    const scaleRating = details.rating

    //On créer un tableau pour ajouter une variable [i], pour faire correspondre la note de l'établissement avec la note dans le tableau
    const starRating = []

    for (let i = 1; i <=5; i++) {
        if (i <= scaleRating) {
            starRating[i] = true
        } else {
            starRating[i] = false
        }
    }

    return(
        <div className="ficheContainer">
            <div className="detailsGauche">
                <div className="detailsTitre">
                    {details.title}
                </div>
                <div className="detailsLocalisation">
                    {details.location}
                </div>
                <div className="tags">
                    {details.tag.map((tagsNumber) => (
                        <div className="tag" key={tagsNumber+details.id}>{tagsNumber}</div>
                    ))}
                </div>
            </div>
            <div className="detailsDroite">
                <div className="detailsHost">
                    <div className="hostName">
                        {details.host.name}
                    </div>
                    <div className="hostPicture">
                        <img src={details.host.picture} alt="profil du propriétaire" />
                    </div>
                </div>
                <div className="detailsRating">
                    {starRating.map((starNumber, index) => 
                    <img src={starNumber ? fullStar : emptyStar} alt={starNumber ? "full star" : "empty star"} key={starNumber+details.id+index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default LodgingDetails


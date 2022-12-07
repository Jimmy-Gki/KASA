import React from 'react';
import { useState } from 'react'; //Import de la fonction useState de React
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Lodgings from "../../API.json";
import CardCSS from "../Card/cardModule.scss";
 
function Card() {
    //Déclaration d'une variable d'état pour récupérer les valeurs des logements
    const [lodgings] = useState(Lodgings)

    return (
        <div className={CardCSS.cardBackground}>
            {lodgings.map((lodging) => (
                <Link to={`/lodgings/${lodging.id}`} key={lodging.id}>
                    <div key={lodging.id} className={CardCSS.cardContainer}>
                        <img src={lodging.picture} alt={lodging.title}/>
                        <div className={CardCSS.cardTitle}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}
 
//Sécurisation des props avec propTypes pour préciser les types de chacunes des propriétés
Card.propTypes = {
    key: PropTypes.string, //label = id des lodgings
    picture: PropTypes.string, //picture = image des lodgings
    title: PropTypes.string, //title = titre des lodgings
}

export default Card
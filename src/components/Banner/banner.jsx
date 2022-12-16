//Import du css pour l'intégrer dans le code
import React from "react";
import "./bannerModule.scss";

//Création du HTML avec les propriétés requises pour le composant (voir FIGMA)
function Banner({src, title, alt}) {
  return (
    <section className="banner">
      <div className="container" >
          <img src={src}  alt={alt} />         
          <h1 className="title">{title}</h1>   
      </div>     
    </section>
  )
}

export default Banner
//Import du css pour l'intégrer dans le code
import React from "react"
import BannerCSS from "../Banner/bannerModule.scss"

//Création du HTML avec les propriétés requises pour le composant (voir FIGMA)
function Banner({src, title, alt}) {
  return (
    <section className={BannerCSS.banner}>
      <div className={BannerCSS.hero}>
          <img src={src}  alt={alt} />           
          <h1 className={BannerCSS.title}>{title}</h1>        
      </div>
    </section>
  )
}

export default Banner
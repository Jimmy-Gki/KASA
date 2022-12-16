import React from "react";
import Logo from "../Images/logo_footer.png";
import "./footerModule.scss";

function Footer () {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo Footer" />
            <p className="text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
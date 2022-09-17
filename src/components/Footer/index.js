import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer">
                <a href="https://github.com/MikeAtwood" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/small/github-logo.jpeg")} alt="github" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/michael-atwood-b19321238/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/small/linkedin-logo.png")} alt="linkedin" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/michaelleeatwood" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/small/facebook-logo.jpeg")} alt="facebook" className="logo"></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
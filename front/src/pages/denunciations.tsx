import React from "react";
import { Link } from "react-router-dom";

import "../styles/global.css";
import "../styles/pages/denunciations.css";

import icon from "../images/icon.svg";

import { FiArrowLeft } from "react-icons/fi";


function denunciations() {
  return (
    <div id="page-denunciations">
      <div className="spaceLogo">
        <div className="logo">
          <img src={icon} alt="icon" />
          <h2>Voz do povo</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <header>
          <div className="tolbarDenunciations">
            <h1>Efetuar denúncias</h1>
            <Link to="/">
              <FiArrowLeft size={15} /> clique para voltar
            </Link>
          </div>
        </header>
        <main>
          <div className="buttonChoice">
            <Link to="/report">Anonimato</Link>
            <Link to="/generateProtocol">Sujeito Identificado</Link>
          </div>
          <div className="alert">
            <p>
              Atenção! Caso escolha fazer a denúncia de forma anônima, não haverá a
              geração de um protocolo. Assim, não será possível acompanhar o
              processo da denúncia.{" "}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default denunciations;

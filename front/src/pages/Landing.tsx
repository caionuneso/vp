import React from "react";
import { Link } from "react-router-dom";

import {FiArrowRight} from 'react-icons/fi';

import '../styles/global.css'
import '../styles/pages/landing.css'

import icon from '../images/icon.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <header>
          <div className="logo">
            <img src={icon} alt="icon" />
            <h2>Voz do povo</h2>
          </div>
          <Link to="/adminAcess" className="login-adm">
            <FiArrowRight size={15} /> Admin access
          </Link>
        </header>
        <div className="buttonChoice">
            <Link to="/denunciations">Denúncia</Link>
            <Link to="/">Sugestão</Link>
            <Link to="/">Índice de efetividade da gestão</Link>
            <Link to="/">Consulte sua manifestação</Link>
            <Link to="/">Elogio</Link>
            <Link to="/">Reclamação</Link>
            <Link to="/">Simplifique</Link>
            <Link to="/">Solicitação</Link>
          
        </div>
        <main>
          <h1>Fale por todos</h1>
          <p>Aponte os problemas ou deficiências de nossa cidade</p>
        </main>
      </div>
    </div>
  );
}

export default Landing;

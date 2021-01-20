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
            <Link to="/denunciations">Denúncia
              <p className="descriptionButton">Informe aqui um problema a ser corrigido</p>
            </Link>
            <Link to="/">Sugestão
              <p className="descriptionButton">Dê-nos uma ideia ou sugestão para melhoria de nossa gestão</p>
            </Link>     
            <Link to="/">Solicitação
              <p className="descriptionButton">Peça um atendimento ou prestação de serviço</p>
            </Link>
            <Link to="/">Consulte sua manifestação
              <p className="descriptionButton">Acompanhe o andamento da sua manifestação</p>
            </Link>
            <Link to="/">Índice de efetividade da gestão
              <p className="descriptionButton">Veja o quanto a gestão da nossa cidade é efetiva</p>
            </Link>
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

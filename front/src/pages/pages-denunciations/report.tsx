import React from 'react';

import icon from '../images/icon.svg'

import { Link } from 'react-router-dom';

import { FiArrowLeft } from "react-icons/fi";

import '../../styles/pages/pages-denunciations/report.css';

function report(){
    return(
            <div id="page-report">
               <header className ="page-header">
                   <div className="top-bar-container">
                        <img src="/static/media/icon.5d399b31.svg" alt="icon"/>
                        <Link to="/denunciations">
                            <FiArrowLeft size={35} /> 
                        </Link>
                        
                   </div>

                   <div className="header-content">
                       <strong>Com a sua contribuição conseguimos transformar nossa cidade em um lugar melhor</strong>
                   </div>

               </header>

                <form id="anonymousForm">
                    <div className="description">
                        <label htmlFor="Descricao">Descrição</label>
                        <input type="text"/>
                    </div>
                </form>

            </div>

    );
}

export default report;



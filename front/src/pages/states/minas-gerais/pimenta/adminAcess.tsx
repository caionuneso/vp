import React from 'react';
import { Link } from 'react-router-dom'

import '../../../../styles/global.css';
import '../../../../styles/pages/adminAcess.css'

import icon from '../../../../images/icon.svg';
import { FiArrowLeft } from 'react-icons/fi';

function adminAcess(){
    return (
        <div id="page-AdminAcess">
            <div className="spaceLogo">
                <div className="logo">
                    <img src={icon} alt="icon" />
                    <h2>Voz do povo</h2>
                </div>
            </div>          
            <div className="content-wrapper">
                <header>
                    <div className="tolbarLogin">
                        <h1>Admin Acess</h1>
                            <Link to="/mg/pimenta/">
                               <FiArrowLeft size={15}/> clique para voltar
                             </Link>
                    </div>             
                </header>
                <main>
                    <div className="content">
                        <div className="formGroup-Credentials">
                            <form action="" name="loginForm" id="login">
                                <input type="text" name="UserName" placeholder="Seu nome de usuário" />
                                <input type="password" name="Password" placeholder="Sua senha" />

                                <input type="submit" name="send" value="continuar" />
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default adminAcess;
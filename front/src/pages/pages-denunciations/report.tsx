import React from 'react';

import icon from '../images/icon.svg'

import '../../styles/pages/pages-denunciations/report.css';

function report(){
    return(
        <div id="page-report">
            <aside>
                <header>
                    <div className="img-logo">
                         <img src="/static/media/icon.5d399b31.svg" alt="icon" />
                    </div>
        
                    <h2>Descreva, com detalhamento, sua denúncia</h2>
                    <p>Você também pode adicionar imagens e vídeos à denúncia</p>

                </header>

                <footer>
                    <strong>Estado (UF)</strong>
                    <span>Cidade</span>
                </footer>
            </aside>

            <main>
                
            <fieldset>
                    <legend>Descreva sua denúncia aqui</legend>

                    <div className="input-block">
                        <label htmlFor="aDescription">Denúncia</label>
                        <input type="text" id="aDescription"/>
                    </div>
                </fieldset>
            </main>
        </div>

    );
}

export default report;
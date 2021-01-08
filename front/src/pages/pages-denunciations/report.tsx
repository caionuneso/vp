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
        
                    <h2>Com a sua contribuição conseguimos transformar nossa cidade em um lugar melhor</h2>
                    <p>Você também pode adicionar imagens e vídeos à denúncia</p>

                </header>

                <footer>
                    <strong>Estado (UF)</strong>
                    <span>Cidade</span>
                </footer>
            </aside>
            <div className="rightBlockReport">

                <div className="styleTitleBlock">
                    <h2>Descreva, com detalhamento, a sua denúncia</h2>
                </div>

                <div className="blockReportForm">
                    
                    

                </div>
            </div>
        </div>

    );
}

export default report;
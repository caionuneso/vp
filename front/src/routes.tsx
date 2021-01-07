import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import adminAcess from './pages/adminAcess';
import denunciations from './pages/denunciations';
import Landing from './pages/Landing';
import generateProtocol from './pages/pages-denunciations/generateProtocol';
import report from './pages/pages-denunciations/report';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/adminAcess" component={adminAcess} />
                <Route path="/denunciations" component= { denunciations } />
                <Route path="/report" component= { report } />
                <Route path="/generateProtocol" component= { generateProtocol } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
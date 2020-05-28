import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import { Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <div className="app">
            <AppHeader/>
            <Switch>
                <Route path = '/' exact component={MainPage}/>
                <Route path = '/cart' exact component={CartPage}/>
                {/* <Route path = '/:id'  component={ItemPage}/> */}
            </Switch>
        </div>
    )
}
export default App;
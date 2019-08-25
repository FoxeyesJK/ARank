import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, NotFoundPage } from '../pages';
import Base from '../containers/common/Base';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ListPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Base/>
        </div>
    );
};

export default App;
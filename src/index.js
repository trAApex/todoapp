import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './reducers/index';
import TodoDetailContainer from './containers/TodoDetailContainer';
import NewRoadContainer from './containers/NewRoadContainer';
import RoadDetailContainer from './containers/RoadDetailContainer';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={AppContainer} />
        <Route path="/todo/:id" component={TodoDetailContainer} />
        <Route path="/newway/" component={NewRoadContainer} />
        <Route path="/newwaydetail/:id" component={RoadDetailContainer} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

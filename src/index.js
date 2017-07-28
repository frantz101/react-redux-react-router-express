import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import About from './components/About'
import {
    Switch
}
from 'react-router-dom'
import {
    Provider
}
from 'react-redux'

import {
    createStore
}
from 'redux'
import rootReducer from './reducers/index'
import {
    BrowserRouter as Router,
    Route
}
from 'react-router-dom'

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}> 
    
    <Router>
        <Switch>
        
     <Route exact  path='/' component={App}/>
        <Route exact path='/about' component={About}/>
         <Route path='/about/owners' component={App}/>
     </Switch>
    </Router>
       
   
</Provider>,
    document.getElementById('root'));
registerServiceWorker();

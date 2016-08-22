import React,{Component} from 'react';
import {render} from 'react-dom';
import App from './containers/app';

import {creatStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'

// const store = creatStore(reducer)

render(
    // {/*<Provider store={store}>*/}
        <App/>
    // </Provider>
    ,document.getElementById('app')
);


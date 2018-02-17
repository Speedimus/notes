import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './containers/reducers';
import * as ActionCreators from './actions/actionCreators';
import App from './view/app/App';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

const baseURL = 'http://localhost:8080/'
let store;

function checkStatus(response)
{
    if (response.status >= 200 && response.status < 300)
    {
        return response
    }
    else
    {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response)
{
    return response.json()
}

function initStore()
{
    store = createStore( reducers );
    ReactDOM.render(
        <Provider store={store} >
            <App />
        </Provider>,
        document.getElementById('root')
    );
};

function loadContentItems(data)
{
    console.log("loadContentItems: data: " + JSON.stringify(data));
    store.dispatch( ActionCreators.loadNotes(data._embedded.noteItems) );
}

function getContentData()
{
    window.fetch(baseURL + 'api/noteItems')
        .then(checkStatus)
        .then(parseJSON)
        .then(loadContentItems)
        .catch((error) => {
            console.log('request failed', error)
        })
}

function loadData()
{
    getContentData();

}

window.onload = () => {
    initStore();
    loadData();
}

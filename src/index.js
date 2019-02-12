import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import data from './testData.json'

/* 
//For supplying default values to props of component 
App.defaultProps = { 
    headMessage: "Hello!"
}; */

ReactDOM.render(
    <App contests={data.contests}/>,
    document.getElementById('root')
);


import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

/* 
//For supplying default values to props of component 
App.defaultProps = { 
    headMessage: "Hello!"
}; */

ReactDOM.hydrate(
    <App initialContests={window.initialData.contests}/>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <App initialContests={[]}/>,
//     document.getElementById('root')
// )

 // console.log(this.state.contests);



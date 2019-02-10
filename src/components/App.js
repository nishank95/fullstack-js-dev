import React from 'react'
import Header from './Header'

/* 
//For stateless functionality use classless component
const App = (props) =>{
    return(
        <div className="App">
            <Header message="Naming Contest"/>
            <div>
                ...
            </div>    
        </div>
    );
}
*/

//For statefull component and to use lifecyce methods inside the component make use of class based component
class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={ pageHeader: 'Naming Contest' };
    }

    componentDidMount(){
        console.log("mount");
        debugger;
    }

    componentWillUnmount(){
        console.log("unmount");
        debugger;
    }
    
    render(){
        return(
        <div className="App">
            <Header message={this.state.pageHeader}/>
            <div>
                ...
            </div>    
        </div>
        )
    }
}

//  Functions that can be carried out in console tab
    //  $r to access the App component
    //  $r.state to access the state
    //  $r.setState to modify the state  

export default App;
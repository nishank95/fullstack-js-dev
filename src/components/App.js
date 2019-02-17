import React from 'react'
import Header from './Header'
import ContestPreview from './ContestPreview' 
import data from '../testData.json'
import axios from 'axios'
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
        this.state = {
            pageHeader: 'Naming Contest',
            contests: this.props.initialContests 
        };
    }

    componentDidMount(){
        
    }

    render(){
        return(
        <div className="App">
            <Header message={this.state.pageHeader}/>
            <div>
                {            
                    this.state.contests.map( contest =>
                        <ContestPreview {...contest} key={contest.id} />
                    )
                }
            </div>    
        </div>
        )
    }
}

/* //  Functions that can be carried out in console tab
    //  $r to access the App component
    //  $r.state to access the state
    //  $r.setState to modify the state  */

export default App;
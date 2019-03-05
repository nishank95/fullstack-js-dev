import React from 'react'
import Header from './Header'
import ContestList from './ContestList'
import Contest from './Contest'
import * as api from '../api'


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


const pushState = (obj,url) => 
        window.history.pushState(obj, '' ,url);

const onPopState = handler =>{
    window.onpopstate = handler
}

//For statefull component and to use lifecyce methods inside the component make use of class based component
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.initialData;
    }

    componentDidMount(){
        onPopState((event) => {
            // console.log(event.state);   
            this.setState({
                currentContestId: (event.state || {}).currentContestId,

            });
        });
    }

    componentWillUnmount(){
        onPopState(null);
    }

    fetchContest = (contestId) =>{
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        );

        api.fetchContest(contestId).then(contest =>{
            this.setState({
                currentContestId: contest.id,
                contests: {
                    // improve the existing contest object by intrdoucing the new contest from api with description property 
                    ...this.state.contests,
                    [contestId]: contest
                }
            }); 
        })        

        
    }

    fetchContestList = () =>{
        pushState(
            {currentContestId: null},
            `/`
        );

        api.fetchContestList().then( contests =>{
            this.setState({
                currentContestId: null,
                contests
            }); 
        });        

    }


    pageHeader(){
        if(this.state.currentContestId){
            return this.currentContest().contestName;
        }

        return "Naming Contests!"
    }

    currentContest(){
        return (this.state.contests[this.state.currentContestId]);
    }

    currentContent(){
        if(this.state.currentContestId){
            /* Made use of triple dots to spread the object and send it to the contest 
            componentt so taht each property of an object can be individualluy accesssed at the contest component
            using this.props.property_name */ 
            return <Contest
                        onContestListClick={this.fetchContestList}     
                        {...this.currentContest()} />
        }   
        
        return <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />    
    }

    render(){
        return(
        <div className="App">
            <Header message={this.pageHeader()} />
            {this.currentContent()}
            
        </div>
        )
    }
}

/* //  Functions that can be carried out in console tab
    //  $r to access the App component
    //  $r.state to access the state
    //  $r.setState to modify the state  */

export default App;
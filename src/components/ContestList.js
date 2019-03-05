import React from 'react'
import ContestPreview from './ContestPreview' 



const ContestList = ({contests, onContestClick}) =>{
    return(
            <div className="ContestList">
                {            
                    Object.keys(contests).map( contestId =>
                        <ContestPreview {...contests[contestId]} onClick={onContestClick} key={contestId} />
                    )
                }
            </div>
    );
}


export default ContestList;
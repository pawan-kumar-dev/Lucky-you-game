import React from 'react';
const ScoreBoard=({attempt,maxAttempt,lucky,wrong})=>{
        return (
            <>
             <p>Attempts : {attempt}/{maxAttempt}</p><p>Lucky Attempts :{lucky}<br></br>Wrong Attempts : {wrong}</p>
            </>
        );
}

export default ScoreBoard;
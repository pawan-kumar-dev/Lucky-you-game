import React from 'react';
import classes from '../App.module.css';
import GameHeader from './GameHeader';
import ScoreBoard from './ScoreBoard';
const GameBoard=(props)=>{
    const {show,attempt,maxAttempt,lucky,wrong,disNum,loadNextNumber,reStart,won,boxes,matched}=props;
        return (
            <div className={classes.game}>
                <GameHeader/>
            <div>
            <div className={classes.gameHead}>
            <ScoreBoard attempt={attempt} maxAttempt={maxAttempt} lucky={lucky} wrong={wrong}/>
            </div>
            <hr></hr>
            <h1>{disNum}</h1>
            <ul>{boxes}</ul>
          </div>
        {attempt===maxAttempt?<div><h3>{matched?"Correct":"Wrong"}</h3><hr></hr><h2 className={classes.won}>Game Over, {won}</h2><button onClick={reStart}>Restart Game</button></div>:show&&<div><h3>{matched?"Correct":"Wrong"}</h3><h4 className={classes.loadNext} onClick={loadNextNumber}>{show&&"Click to Load Next Number"}</h4></div>}
            </div>
        );
}

export default GameBoard;
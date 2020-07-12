import React from 'react';
import classes from '../App.module.css';
const GameHeader=()=>{
        return (
            <>
                <h2>Lucky You</h2><hr></hr>
                <h4>.... Follow the rules ....</h4><hr></hr>
                <div className={classes.rules}>
                    <p>1. Find the displayed number from the <span className={classes.main}>3 hidden boxes</span> by clicking on anyone box.</p>
                    <p>2. Only one of them contains the correct number.</p>
                    <p>3. You have <span className={classes.main}>maximum 10 attempts</span>, and if you select the correct box it will increase your <span className={classes.main}>
                    luck factor.</span> </p>
                    <p>4. If you select the <span className={classes.main}>wrong box</span> then it increase the<span className={classes.main}> wrong attempt number.</span> </p>
                    <p>5. The overall luck is calculated based on the<span className={classes.main}> maximum lucky attempts you make out of 10 attempts.</span> </p>
                </div><hr></hr>
            </>
        );
}

export default GameHeader;
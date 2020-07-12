import React from 'react';
const Boxes=({show,attempt,maxAttempt,check,data})=>{
        return (
            <li onClick={(show||(attempt===maxAttempt))?()=>{return null}:check}><span style={(show||(attempt===maxAttempt))?{visibility:"visible"}:{visibility:"hidden"}}>{data}</span></li>
        );
}

export default Boxes;
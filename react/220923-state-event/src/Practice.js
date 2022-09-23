import React, { useState } from 'react';

// 실습 57
function Practice(){
    const [num, setNum] = useState("");

    function Increase(){
        
    }

    function Decrease(){
        
    }

    return (
        <div>
            <h1>숫자 : {num}</h1>
            <button 
                onClick={Increase}>
                    +2
            </button>
            <button 
                onClick={Decrease}>
                    -1
            </button>
        </div>
    );
}

export default Practice;
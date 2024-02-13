import React, { useState } from "react";

function Car() {
    const [x, setX] = useState(0);
    const [q , setQ] = useState([]);
    const [q2 , setQ2] = useState([]);

    const move = () => {
            console.log(x);
            setX(prevX => prevX + 1);
    }

    const moveback = () => {
        console.log(x);
        setX(prevX => prevX - 1);
}
    
    const stop = () => {
        var size = q.length;
        var size2 = q2.length;
        for(let i=0;i<=size;i=i+1){
            clearInterval(q.pop());
        }
        for(let i=0;i<=size2;i=i+1){
            clearInterval(q2.pop());
        }   
    }
    const fast = () => {
        if(q2.length>0)
            clearInterval(q2.pop());
        else
            q.push( setInterval(move , 100));
    }
    const slow = () => {
        if(q.length>0)
            clearInterval(q.pop());
        else
            q2.push(setInterval(moveback, 100))
    }

    if (x >= 1400) {
        stop();
    }
    if(x<=2)
    stop();

    return (
        <>
            <h1>Hi, Don't Drink and Drive </h1>

            <div style={{ position: 'relative' }}>
                <img src="/road.jpg" alt="bg" style={{ width: '1500px' }} />
                <img src="/car.gif" alt="car" style={{ position: 'absolute', top: '200px', left: `${x}px`, background: 'none' }} />
            </div>
            <hr />
            <h2>Current Location : {x} m , Range : 0 m to 1400 m</h2>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={fast}>ACCELERATE</button>
                <button onClick={stop}>STOP</button>
                <button onClick={slow}>Reverse</button>
            </div>
        </>
    )
}

export default Car;

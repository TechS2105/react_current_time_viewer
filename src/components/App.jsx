import React, { useState } from 'react';

function App() {

    const currentTime = new Date().toLocaleTimeString(undefined, {

        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    });

    const [time, setTime] = useState(currentTime);

    function increaseTime() {
        
        const newTime = new Date().toLocaleTimeString(undefined, {

            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false

        });

        setTime(newTime);

    }

    setInterval(increaseTime, 1000)
    
    return (

        <div className="container">

            <h1> {time} </h1>
            <button onClick={increaseTime}> Get Time </button>

        </div>

    );

}

export default App;
import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => setSeconds(prev => prev + 1), 1000);
        setIntervalId(id);
        return () => clearInterval(id);
    }, []);

    const start = () => {
        if (!intervalId) {
            const id = setInterval(() => setSeconds(prev => prev + 1), 1000);
            setIntervalId(id);
        }
    };

    const stop = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const reset = () => {
        stop();
        setSeconds(0);
    };

    const countdown = (startValue) => {
        stop();
        setSeconds(startValue);
        const id = setInterval(() => {
            setSeconds(prev => {
                if (prev > 0) return prev - 1;
                clearInterval(id);
                return 0;
            });
        }, 1000);
        setIntervalId(id);
    };

    return (
        <div className="app">
            <SecondsCounter seconds={seconds} />
            <div className="buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => countdown(10)}>Countdown from 10</button>
            </div>
        </div>
    );
};

export default Home;

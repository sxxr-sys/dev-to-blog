// import { Button } from "@mui/material";
import { useState, useEffect } from "react";

// export const AllBlog = () => {

export const Timer = ({ seconds }) => {
    const [timeRemaining, setTimeRemaining] = useState(10);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (timeRemaining <= 0) return;
        const interval = setInterval(() => {
            setTimeRemaining(timeRemaining - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [timeRemaining, isStarted]);

    const handleClick = () => {
        setIsStarted(true);
    };

    return (
        <>
            <div>
                <h1>Time Remaining: {timeRemaining}</h1>
                <button onClick={handleClick}>Start</button>
            </div>
        </>
    );
};
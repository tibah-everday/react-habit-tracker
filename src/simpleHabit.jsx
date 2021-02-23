import React,{useState, useEffect, useRef, useCallback} from 'react';

function SimpleHabit() {
    const [count, setCount] = useState(0);    
    const handleIncrease = useCallback((e)=>{
        console.log(e.target);
        setCount(count+1);
    });
    const handleDecrease = useCallback((e)=>{
        console.log(e.target);
        setCount(count-1);
    });
    useEffect(()=>{
        console.log(`mounted & updated: ${count}`);
    },[count])
    return (
        <li>
            <span>HabitExample</span>
            <span className="habit-count"> count:{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrease}>
            +
            </button>
            <button className="habit-button habit-increase" onClick={handleDecrease}>
            -
            </button>
        </li>
    )
}

export default SimpleHabit

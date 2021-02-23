import React from 'react'

function Habit2(props) {    
    function handlePlus(){
        props.onPlus(props.habit);        
    }
    function handleMinus(){
        props.onMinus(props.habit);
    }
    function handleRemove(){
        props.onRemove(props.habit);
    }
    return (
        <>
        <li>
            {props.habit.name}
            <span>
                {props.habit.count}회
            </span>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            <button onClick={handleRemove}>remove</button>
        </li>
        </>
    )
}

export default Habit2

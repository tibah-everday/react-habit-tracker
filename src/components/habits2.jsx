import React from 'react';
import AddTodo2 from './addTodo2';
import Habit2 from './habit2';
import Reset2 from './reset2';

function Habits2(props) {
    // const habits= props.habits;
    return (
        <>
        <AddTodo2 onAdd={props.onAdd}/>
        <ul>
            {props.habits.map((habit)=>{
                return <Habit2 habit={habit} onPlus={props.onPlus} onMinus={props.onMinus} onRemove={props.onRemove} key={habit.id}/>
            })}
            {/* {props.habits} */}
        </ul>
         <Reset2 habits={props.habits} onReset={props.onReset}/>
        </>
    )
}

export default Habits2

import React from 'react'

function Reset2(props) {
    function handleReset(){
        console.log("asdfasdfasdf");
        props.onReset(props.habits);
    }
    return (
        <button onClick={handleReset}>
            reset all
        </button>
    )
}

export default Reset2

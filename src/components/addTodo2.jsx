import React,{useRef} from 'react'

function AddTodo2(props) {
    function handleAdd(e){        
        e.preventDefault();
        console.log(inputRef.current.value);
        props.onAdd(inputRef.current.value);
        formRef.current.reset();
    }
    const inputRef = useRef();
    const formRef = useRef();
    return (
        <form action="" ref={formRef}>
            <input type="text" ref={inputRef}/>
            <button onClick={handleAdd}>add</button>
        </form>
    )
}

export default AddTodo2

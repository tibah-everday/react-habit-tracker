
import React,{memo} from 'react'

// function AddTodo(props) {
//     const inputRef = React.createRef();
//     const formRef =React.createRef();    
//     function addTodo(e){
//         inputRef.current.value&&props.onAdd(inputRef.current.value);
//         formRef.current.reset();
//     }    
//     return (
//         <form action="" ref={formRef}>
//             <input type="text" ref={inputRef}/>
//             <button onClick={addTodo}>add new todo</button>
//         </form>
//     )
// }

const AddTodo = memo(props=>{
    const inputRef = React.createRef();
    const formRef =React.createRef();    
    function addTodo(e){
        e.preventDefault();
        inputRef.current.value&&props.onAdd(inputRef.current.value);
        formRef.current.reset();
    }    
    return (
        <form action="" ref={formRef}>
            <input type="text" ref={inputRef}/>
            <button onClick={addTodo}>add new todo</button>
        </form>
    )
})

export default AddTodo;






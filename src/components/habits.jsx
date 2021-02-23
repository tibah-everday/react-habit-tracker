import React, { Component } from 'react'
import Habit from './habit'
import AddTodo from './addTodo'

class Habits extends Component {    
    handleIncrease = (habit)=>{
        this.props.onIncrease(habit);
    }
    handleDecrease = (habit)=>{
        this.props.onDecrease(habit);
    }
    handleDelete = (habit)=>{
        this.props.onDelete(habit);
    }
    handleAdd = (name)=>{
        this.props.onAdd(name);
    }
    // 데이터를 갖고있는 곳에서 데이터를 수정하는 게 맞겠지?
    render() {
        return (
            <>
            <AddTodo onAdd={this.handleAdd}/>
            <ul>
                {this.props.habits.map((item)=>(
                    <Habit key={item.id} habit={item} onIncrease={this.handleIncrease} onDecrease={this.handleDecrease} onDelete={this.handleDelete}/>
                ))}
            </ul>
            <button onClick={this.props.onReset}>ResetAll</button>            
            </>
        )
    }
}

export default Habits

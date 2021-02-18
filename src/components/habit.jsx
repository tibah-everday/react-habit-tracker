import React, { Component } from 'react'

class Habit extends Component {
    handleInc = ()=>{
        this.props.onIncrease(this.props.habit);        
    }
    handleDec = ()=>{
        this.props.onDecrease(this.props.habit);
    }
    handleDel = ()=>{
        this.props.onDelete(this.props.habit);
    }
    render() {
        // const {name, count} = this.props.habit;
        const name = this.props.habit.name;
        const count = this.props.habit.count;
        console.log(this.props.habit);
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">:{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleInc}>+</button>
                <button className="habit-button habit-decrease" onClick={this.handleDec}>-</button>
                <button className="habit-button habit-delete" onClick={this.handleDel}>remove</button>
            </li>
        )
    }
}


export default Habit;
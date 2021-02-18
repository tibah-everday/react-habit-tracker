import React, { Component } from 'react'
import Habit from './habit'
class Habits extends Component {
    state={
        habits:[
            {id:1, name: "Reading", count:0},
            {id:2, name: "Running", count:0},
            {id:3, name: "Coding", count:0}
        ]
    }
    handleIncrease = (habit)=>{
        const habits = [...this.state.habits]; 
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits:habits});
    }
    handleDecrease = (habit)=>{
        const habits = [...this.state.habits];
        habit.count>0?habits[habits.indexOf(habit)].count--:habits[habits.indexOf(habit)].count=0;
        this.setState({habits:habits});
    }
    handleDelete = (habit)=>{
        const habits = this.state.habits.filter((item)=>{
            return item.id!==habit.id;
        });
       
        this.setState({habits});
    }
    // 데이터를 갖고있는 곳에서 데이터를 수정하는 게 맞겠지?

    render() {
        return (
            <ul>
                {this.state.habits.map((item)=>(
                    <Habit key={item.id} habit={item} onIncrease={this.handleIncrease} onDecrease={this.handleDecrease} onDelete={this.handleDelete}/>
                ))}
            </ul>
        )
    }
}

export default Habits

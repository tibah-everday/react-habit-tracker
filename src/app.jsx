import React, { Component } from 'react';
import Habits from './components/habits';
import Nav from './components/nav';
// import Reset from './components/reset'
import './app.css';
class App extends Component {
  state={
    habits:[
        // {id:1, name: "Reading", count:0},
        // {id:2, name: "Running", count:0},
        // {id:3, name: "Coding", count:0}
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
handleAdd = (name)=>{  
  const habits = [...this.state.habits];
  habits.push({id:Date.now(), name:name, count:0});
  this.setState({habits});
}
handleReset = ()=>{
  const habits= this.state.habits.map((item)=>{
    item.count=0;
    return item;
  })  
  this.setState({habits});
}
// 여기서 만든 함수의 인자로 무엇을 전달할 지가 결국에는 최하위/실제로 쓰이는 컴포넌트에서 정해지는 거다 준석아!!!!!!!!

  render() {
    return (
      <div>
        <Nav totalCount={this.state.habits.filter((item)=>item.count>0).length}/>        
        <Habits habits={this.state.habits} onIncrease={this.handleIncrease} onDecrease={this.handleDecrease} onDelete={this.handleDelete} onAdd={this.handleAdd} onReset={this.handleReset}></Habits>
        {/* <Reset habits={this.state.habits} onReset={this.handleReset}/> */}
      </div>
    )
  }
}



export default App;

// 그냥 순수 자바스크립트아니고 컴포넌트임을 드러내기 위해서 jsx파일로 만든 거라고 생각하면 편함
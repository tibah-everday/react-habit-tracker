import React, { Component } from 'react'

class Habit extends Component {
    componentDidMount(){
        console.log("Asdf")
    }
    componentWillUnmount(){
        console.log("fdsa");
    }
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

// state값이 없다면 함수로 컴포넌트를 구성 가능하고, 특정 컴포넌트에 데이터 변동이 없을 시 렌더링 하지 않고자 한다면 pureComponent(클래스) / memo(함수)를 사용
export default Habit;
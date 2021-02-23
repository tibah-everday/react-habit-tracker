import React, { Component } from 'react'

class Nav extends Component {
    render() {
        // let count = 0;
        // this.props.habits.forEach((item)=>{
        //     count = count + parseInt(item.count);
        //     // console.log(count);
        //     // return count;    
        //     console.log(item.count, count);
            
        // });
        // console.log(count);
        // const comment=count<=1?" todo now":" todos now";
        const comment = this.props.totalCount<=1?" habit now": "habits now"
        return (
            <nav>
                You're doing {this.props.totalCount}{ comment} 
            </nav>
        )
    }
}

export default Nav
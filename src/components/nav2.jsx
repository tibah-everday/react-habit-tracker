import React from 'react'

function Nav2(props) {
    return (
        <>
        <h1>habitTracker</h1>
        <span>
            진행중인 습관:{props.countAll}개
        </span>
        </>
    )
}

export default Nav2

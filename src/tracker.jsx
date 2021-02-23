import React,{useState, useEffect, useCallback} from 'react'
import Nav2 from './components/nav2';
import Habits2 from './components/habits2';


function Tracker() {    
    const [habits, setHabits] = useState([]);
    const counter = habits.filter((habit)=>{
        return habit.count>0;
    })
    function handlePlus(habit){
        const newHabits = [...habits];
        const index= newHabits.indexOf(habit);
        newHabits[index].count++;
        setHabits(newHabits);
    }
    function handleMinus(habit){
        const newHabits = [...habits];
        const index= newHabits.indexOf(habit);
        newHabits[index].count>0?newHabits[index].count--:newHabits[index].count=0;
        setHabits(newHabits);
    }
    const handleAdd = useCallback(((newHabit)=>{
        const newHabits = [...habits];
        newHabits.push({name:newHabit, count:0, id:Date.now()})
        setHabits(newHabits);
    }));
    // function handleAdd(newHabit){        
    //     console.log(newHabit);
    //     const newHabits = [...habits];
    //     newHabits.push({name:newHabit, count:0, id:Date.now()})
    //     setHabits(newHabits);
    // }
    function handleRemove(habit){
        // console.log(habit);
        // const newHabits = [...habits];
        // const newnewHabits = newHabits.filter((item)=>item.id !== habit.id);
        // setHabits(newnewHabits);
        const newHabits = habits.filter((item)=>{
            return item.id !== habit.id;
        })
        setHabits(newHabits);
    }
    function handleReset(habits){
        console.log("handleReset");
        console.log(habits);
        const resetHabits = habits.map((habit)=>{
            habit.count=0;
            return habit;
        })
        console.log(resetHabits);
        setHabits(resetHabits);
    }
    useEffect(()=>{
        console.log("qwerm,.asdfkjdo");
    },[])
    return (
        <>
            <Nav2 countAll={counter.length} />
            <Habits2 habits={habits} onPlus={handlePlus} onMinus={handleMinus} onAdd={handleAdd} onRemove={handleRemove} onReset={handleReset}/>
        </>
    )
}

export default Tracker



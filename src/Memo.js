import React ,{useState,useMemo}from 'react'

function Memo() {

    const[number,setNumber]=useState(1)
    const[count,setCount]=useState(0)

    const fact= useMemo(() => Factorial(number), [number])
    function Factorial(n){
        console.log("factorial called")
        return n<=0?1:(n*Factorial(n-1))
    }

    const increment=()=>setCount(count+1)

    const handleNumber=event=>{
        setNumber(Number(event.target.value))
    }
    return (
        <div>
            <h3>Factorial of</h3>
            <input type="text" value={number} onChange={handleNumber}></input>is{fact} 
            <button onClick={increment}>count-{count}</button>
        </div>
    )
}

export default Memo

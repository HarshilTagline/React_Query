import React ,{useCallback,useState}from 'react'
import Callbackchild1 from './Callbackchild1'
import Callbackchild2 from './Callbackchild2'
import Callbackchild3 from './Callbackchild3'
// import React from 'react'
export default function Callback() {

    // const handleClick=useCallback(() =>{console.log("clicked");alert("click")},[])
       const[todo,setTodo]=useState([])
       const[count,setCount]=useState(0)

        const addCount=useCallback(()=>setCount(count+1),[count])

       const addTodo =useCallback(()=>
            setTodo((todo)=>[...todo,"new todo"]),[])
    
       console.log("PARENT")
    return (
        <div>
           {/* <button onClick={handleClick}>click</button>  */}
           <Callbackchild1 todo={todo} addTodo={addTodo}/>
           <Callbackchild2 count={count} addCount={addCount}/>
           <Callbackchild3 count={count}/>
        </div>
    )
}


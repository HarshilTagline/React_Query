import React from 'react'

function Callbackchild1({todo,addTodo}) {
    console.log("child 1 render")
    return (
        <div>
            <h1>Todos</h1>
            {todo.map((todo,index)=>{return <h3 key={index}>{todo}</h3>})}
            <button onClick={addTodo}>Add</button>
        </div>
    )
}
export default React.memo(Callbackchild1);
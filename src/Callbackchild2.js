import React from 'react'

function Callbackchild2({count,addCount}) {
    console.log("child 2 render")
    return (
        <div>
            <button onClick={addCount}>count{count}</button>
        </div>
    )
}

export default React.memo(Callbackchild2);

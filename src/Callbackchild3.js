import React from 'react'

function Callbackchild3({count}) {
    console.log("child 3 render")
    return (
        <div>
            count:{count}
        </div>
    )
}

export default React.memo(Callbackchild3);

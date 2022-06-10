import React from 'react'
import Contextchild2 from "./Contextchild2"
function Contextchild1() {

    // console.log("child1 render")
    return (
        <>
            <Contextchild2 />
        </>
    )
}

export default Contextchild1

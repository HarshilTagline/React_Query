import React ,{useRef}from 'react'

function Useref() {

    const ref = useRef()
    const clickHandle=()=>{ref.current.focus();}

    return (
        <div>
            <input type="text" ref={ref}></input>
            <button onClick={clickHandle}>Focus input</button>
        </div>
    )
}

export default Useref

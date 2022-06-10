import React from 'react'

export default function Exp() {
    const arr=["john",1,"marry",2,3]
    localStorage.setItem(`arrData`,JSON.stringify(arr))
    const arr2=localStorage.getItem(`arrData`)
    return (
        <div>
            {arr2}
        </div>
    )
}

import React, { useState,useEffect } from 'react'

const Home = () => {
    const [count, setCount]= useState(0)
    function effect(){
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={effect}>Increment</button>
        </div>
    )
}

export default Home

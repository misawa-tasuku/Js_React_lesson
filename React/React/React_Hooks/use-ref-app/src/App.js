import React, { useRef, useState, useCallback } from "react";

export const App = () => {
  const count = useRef(0);

  const addCount = useCallback(()=>{
    count.current += 1
  },[])

  const showLog = useCallback(()=>{
    console.log(count.current)
  },[])

  return (
    <>
      <button onClick={addCount}>add count</button>
      <button onClick={showLog}>show log</button>
    </>
  )
}

export default App;

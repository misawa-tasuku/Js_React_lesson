import React, { useState, useEffect } from 'react';

export const App = () => {
  const [count, changeCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [count])

  return (
    <>
      <p>カウント:{count}</p>
      <input type="button" value="10" onClick={() => changeCount(10)} />
    </>
  )
}
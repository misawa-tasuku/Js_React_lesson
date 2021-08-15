import React, { useCallback } from "react";


export const App = () => {
  const handleInput = useCallback((e) => {
    console.log(e.target.value)
  }, [])

  return (
    <div>
      <input type="button" defaultValue="" onClick={handleInput} />
    </div>
  )
}
import React, {useState} from 'react';


export const App = () => {
  const [count, changeCount] = useState(0)//状態の定義
  const [name, changeName] = useState('')//関連性のない状態は別のuseStateで管理
  return (
    <>
      <p>カウント:{count}</p>
      <p>:{name}</p>
      <input 
        type="button"
        value="increment"
        onClick={() => changeCount(prevCount => prevCount+1)}  //無名関数の引数には直前の状態が引き渡される     
      />
      <input 
        type="text"
        value={name}
        onChange={e => changeName(e.target.value)} 
      />
    </>
  )
}


import React, { useEffect, useState} from "react";

export const App = (props) => {
  

  const [state, setState] = useState(props);
  const {name, price} = state

  useEffect(() => {
    console.log('This is invoked')
  })
  // renderPeriodの後で実行

  useEffect(() => {
    console.log('This is ')
  }, [name])//[]をつける事でdomで動かない

  const renderPeriod = () => {
    console.log(`renderPeriod renders period`)
    return '。'
  }
 
  return (
    <>
      <p>現在の{name}は、{price}円です</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000,
}
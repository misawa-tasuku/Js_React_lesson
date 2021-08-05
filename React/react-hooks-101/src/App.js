import React, {useState} from "react";

export const App = (props) => {
  

  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  return (
    <>
      <p>現在の{name}は、{price}円です</p>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000,
}
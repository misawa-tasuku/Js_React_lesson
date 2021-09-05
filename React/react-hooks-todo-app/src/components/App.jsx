import React, {useReducer, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './TodoForm'
import reducer from '../reducers'
import Todos from './Todos'


const App = () =>  {
  const [state, dispatch] = useReducer(reducer, [])

  // const [incompleteTodos, setIncompleteTodos] = useState([])

  // const [doingTodos, setDoingTodos] = useState([])
  // const [completeTodos, setCompleteTodos] = useState([])

  return (
    // JSXだとclassName
    <div className="container-fluid">
      <TodoForm state={state} dispatch={dispatch} />
      
     
      <Todos state={state} dispatch={dispatch} />
    </div>
    
  )
}

export default App;

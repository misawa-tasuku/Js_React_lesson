import React, { useState } from 'react';
import "./styles.css";
import { InputTodo } from './components/inputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    // alert(todoText);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];//配列をコピー
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos)
    // alert(index);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];//配列をコピー
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);

    // alert(index);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
    <InputTodo 
      todoText={todoText} 
      onChange={onChangeTodoText} 
      onClick={onClickAdd} 
      disabled={incompleteTodos.length >= 5}
    />
    {incompleteTodos.length >= 5 && (
      <p style={{ color: 'red'}}>
        登録できるTODO五個まで！消化して！
      </p>
    )}
    <IncompleteTodos 
      todos={incompleteTodos} 
      onClickComplete={onClickComplete} 
      onClickDelete={onClickDelete}
    />
    <CompleteTodos 
      todos={completeTodos} 
      onClickBack={onClickBack}
    />
    </>
  );
};
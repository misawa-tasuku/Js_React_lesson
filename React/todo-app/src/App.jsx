import React, { useState } from 'react';
import "./styles.css";
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { DoingTodos } from './components/DoingTodos';
import { CompleteTodos } from './components/CompleteTodos';

//Reactで状態が変化するものはStateで定義

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [deadline, setDeadline] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [doingTodos, setDoingTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [deadlines, setDeadlines] = useState([]);
  const [doingDeadlines, setDoingDeadlines] = useState([]);
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onChangeDeadline = (e) => setDeadline(e.target.value);
  //現在日時stateで管理する？
  const year = new Date().getFullYear();
  const month = new Date().getMonth()+1;
  const date = new Date().getDate();
   
  const onClickAdd = () => {
    if (todoText === '' || deadline === '') return;
    const newTodos = [...incompleteTodos, todoText];
    const newDeadline = [...deadlines, deadline];
    setIncompleteTodos(newTodos);
    setTodoText('');
    setDeadlines(newDeadline);
    setDeadline('');
  }

  const onClickStart = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newDeadline = [...deadlines];
    newIncompleteTodos.splice(index, 1);
    newDeadline.splice(index, 1);

    const newDoingTodos = [...doingTodos, incompleteTodos[index]];
    const newDoingDeadlines = [...doingDeadlines, deadlines[index]];
    setIncompleteTodos(newIncompleteTodos);
    setDeadlines(deadlines);
    setDoingTodos(newDoingTodos);
    setDoingDeadlines(newDoingDeadlines);
  }
  const onClickComplete = (index) => {
    const newDoingTodos = [...doingTodos];
    const newDoingDeadline = [...doingDeadlines];
    newDoingTodos.splice(index, 1);
    newDoingDeadline.splice(index, 1);

    const newCompleteTodos = [...completeTodos, doingTodos[index]];
    setDoingTodos(newDoingTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    const newDeadline = [...deadlines];
    newTodos.splice(index, 1);
    newDeadline.splice(index, 1);
    setIncompleteTodos(newTodos);
    setDeadlines(newDeadline);
  }

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        deadline={deadline} 
        onChangeTodoText={onChangeTodoText} 
        onChangeDeadline={onChangeDeadline} 
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5} 
      />
      {incompleteTodos.length >= 5 && (
        <p style={{color: 'red'}}>上限に達しました。Todoを消化してください</p>
      )}
      <IncompleteTodos todos={incompleteTodos} deadlines={deadlines} onClickStart={onClickStart} onClickDelete={onClickDelete} />
      <DoingTodos todos={doingTodos} deadlines={doingDeadlines} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos} year={year} month={month} date={date} />
    </>
  );
};

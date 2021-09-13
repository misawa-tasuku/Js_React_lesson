import React from 'react';

export const CompleteTodos = (props) => {
  const {todos, year, month, date} = props;
  return (
    <div className="complete-area">
      <p>完了したTodoリスト</p>
      <ol>
        {todos.map((todo) => {
          return(
            <li>
            <div key={todo} className="list-row">
              <p>{todo}</p>
              <p>{year + '/' + month + '/' + date}</p>
            </div>
          </li>
          );
        })}
      </ol>
    </div>
  );
};
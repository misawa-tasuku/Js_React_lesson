import React from 'react';

export const IncompleteTodos = (props) => {
  const {todos, deadlines, onClickStart, onClickDelete} = props;
  return (
    <div className="incomplete-area">
      <p>未着手Todoリスト</p>
      <ol>
        {todos.map((todo, index) => {
          return(
            <li>
              <div key={todo} className="list-row">
                <h4>タイトル</h4>
                <p>{todo}</p>
                <h4 className='deadline'>期限</h4>
                <p>{deadlines[index]}</p>
                <button onClick={() => onClickStart(index)}>開始</button>
                <button>変更</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
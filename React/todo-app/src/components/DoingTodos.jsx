import React from 'react';


export const DoingTodos = (props) => {
  const {todos, deadlines, onClickComplete, onClickDelete} = props;
  return (
    <div className="ing-area">
        <p>進行中Todoリスト</p>
        <ol>
        {todos.map((todo, index) => {
            return(
              <li>
                <div key={todo} className="list-row">
                  <h4>タイトル</h4>
                  <p>{todo}</p>
                  <h4 className='deadline'>期限</h4>
                  <p>{deadlines[index]}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
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
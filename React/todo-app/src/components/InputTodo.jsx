import React from 'react';

export const InputTodo = (props) => {
  const { todoText, deadline ,onChangeTodoText, onChangeDeadline, onClick, disabled} = props;
  return (
    <>
      <div className="input-area">
        <input disabled={disabled} placeholder="タイトル"  value={todoText} onChange={onChangeTodoText} />
        <input disabled={disabled} placeholder="期限"  value={deadline} onChange={onChangeDeadline} />
        <button disabled={disabled} onClick={onClick}>追加</button>
      </div>
    </>
  )
}
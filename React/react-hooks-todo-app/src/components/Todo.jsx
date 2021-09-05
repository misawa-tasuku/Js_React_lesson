import React from 'react'
import { DELETE_TODO } from '../actions'

const Todo = ({ dispatch ,todo }) => {
  const id = todo.id
  const handleClickDeleteButton = () => {
      const result = window.confirm(`イベントを本当に削除しても良いですか?`)
      if (result) dispatch({ type: DELETE_TODO, id: id })
  }
  const CompleteButton = () => {
    console.log(id)
  }

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.body}</td>
      <td>{todo.limit}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
      <td><button type="button" className="btn btn-primary" onClick={() => CompleteButton}>完了</button></td>
    </tr>
  )
}

export default Todo
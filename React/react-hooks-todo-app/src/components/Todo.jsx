import React from 'react'

const Todo = ({ dispatch ,todo }) => {
  const id = todo.id
  const handleClickDeleteButton = () => {
      dispatch({ type: 'DELETE_TODO', id: todo.id })
  }

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Todo
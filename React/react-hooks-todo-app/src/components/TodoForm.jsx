import React, { useState } from "react"
import { CREATE_TODO, DELETE_ALL_TODOS } from "../actions"
// import reducer from '../reducers'


const TodoForm = ({state, dispatch}) => {
  // const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [limit, setLimit] = useState('')

  const addTodo = e => {
    e.preventDefault()//画面のリロード防ぐ
    dispatch({
      type: CREATE_TODO,
      title,
      body,
      limit
    })
    setTitle('')
    setBody('')
    setLimit('')
  }

  const deleteAllTodo = e => {
    e.preventDefault()
    const result = window.confirm('全てのTODOを本当に削除してもよろしいですか?')
    if (result) dispatch( {type: DELETE_ALL_TODOS} )
  }

  const unCreatable = title === '' || body === '' || limit === ''
  return (
    <>
    <h4>TODO作成フォーム</h4> 
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} 
          onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea className="form-control" id="formEventBody" value={body}
          onChange={e => setBody(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventLimit">期限日</label>
          <input className="form-control" id="formEvent Limit" value={limit}
          onChange={e => setLimit(e.target.value)} />
        </div>
        
        
        <button className="btn btn-primary" onClick={addTodo} disabled={unCreatable}>TODO作成</button>
        <button className="btn btn-danger" onClick={deleteAllTodo} disabled={state.length === 0}>全てのTODOを一括削除</button>
      </form>
    </>
  )
}

export default TodoForm
import React from 'react'
import Todo from './Todo'

const Todos = ({ state, dispatch }) => {
  return (
    <>
      <h4>TODO一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
            <th>期限日</th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((todo, index)=> (<Todo key={index} todo={todo} dispatch={dispatch} />))
          }
        </tbody>
      </table>
    </>
  )
}

export default Todos
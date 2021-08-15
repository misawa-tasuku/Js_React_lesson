import React, { useState, useEffect } from 'react';
// import React, {  } from 'react';


export const App = () => {
  const [page, changePage] = useState(1)
  const [article, changeArticle] = useState([])


  useEffect(() => {
    console.log("fetch")
    const url = `https://xxx/lists?page=${page}`
    fetch(url)
      .then( res => res.join() )
      .then( res => {
        changeArticle(res);
      })
  }, [page])
  return (
    <>
      <p>{page}ページ</p>
      <input type="button" value="次" onClick={() => changePage(prevPage=>prevPage+1)} />

      <ul>
        {article.map(article => (
          <li>{article.title.rendered}</li>
        ))}
      </ul>
    </>
  )
}


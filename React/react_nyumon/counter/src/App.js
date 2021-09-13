import React from 'react';
import Counter from './components/Counter';
// import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <div className='ui container' style={{marginTop: '20px'}}>App</div>
      <Counter/>
    </div>
  )
}

export default App;
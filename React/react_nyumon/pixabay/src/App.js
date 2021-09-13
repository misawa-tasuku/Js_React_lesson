import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const onSearchSubmit = async(term) => {
    try{
      const params={
        key="22582718-9c51f4c60d8740ca384e7fc87",
        q = term,
      }
    }catch{

    }
    console.log(term);
  };
  return(
    <div>
      <div className='ui container' style={{ marginTop: '20px' }}></div>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  )
}

export default App;

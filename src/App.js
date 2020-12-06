import React from 'react';
import './App.css';
import News from './Component/News/News';
import Header from './Component/Header/Header';
import TopHeadlines from './Component/TopHeadlines/TopHeadlines';

function App() {
  return (
    <div>
      <h3 className='bg-danger'>Bootstrap</h3>
      <Header></Header>
      <TopHeadlines></TopHeadlines>
    </div>
  );
}

export default App;

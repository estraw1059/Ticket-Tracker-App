import React from 'react';
import ParentCard from './components/Card/ParentCard';
import NavBar from './components/NavBar/NavBar';
import { CardType } from './components/Types';

function App() {
  const cardTest = <div>Some Text</div>
  return (
    <>
      <NavBar/>
      <ParentCard title='test' component={cardTest} cardType={CardType.SERVICE}/>
    </>
  );
}

export default App;

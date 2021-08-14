import React from 'react';
import SlideBar from './components/SlideBar';

function App() {
  const ops = ["About","Resume","Portfolio"];
  return (
    <SlideBar 
      opciones={ops}/>
  );
}

export default App;

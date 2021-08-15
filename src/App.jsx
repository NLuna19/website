import React from 'react';
import SlideBar from './components/SlideBar';
import AsideProfil from './components/AsideProfil';

function App() {
  const ops = ["About","Resume","Portfolio"];

  return (
    <div>
      <SlideBar opciones={ops}/>
      <div className="container border border-0 border-primary">
        <div className="row border border-0">

          <AsideProfil/>

          <AsideProfil/>

          <AsideProfil/>

          {/* <div className="col-12 col-md-12 col-xl-8 border border-1 border-primary"> </div>*/}
          
        </div>
      </div>
    </div>
  );
}

export default App;

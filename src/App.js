import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import OffCanvas from './OffCanvas';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <br/>
      <Cards />
      <br/>
      <OffCanvas />
     
    </div>
  );
}

export default App;

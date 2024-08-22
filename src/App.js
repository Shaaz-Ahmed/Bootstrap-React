import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import OffCanvas from './OffCanvas';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import Buttons from './Buttons';
import Slideshow from './Slideshow';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <br/>
      <Cards />
      <br/>
      <OffCanvas />
      <br/>
      <Buttons />
      <br/>
      <Slideshow />
    </div>
  );
}

export default App;

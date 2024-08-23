import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import OffCanvas from './OffCanvas';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import Buttons from './Buttons';
import Slideshow from './Slideshow';
import Modal from './Modal';
import Popover from './Popover';
import Spinner from './Spinner';
import Toast from './Toast';

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
      <br/>
      <Modal />
      <br/>
      <Popover/>
      <br/>
      <Spinner/>
      <br/>
      <Toast/>
    </div>
    
  );
}

export default App;

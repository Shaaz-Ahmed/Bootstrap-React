import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const OffCanvas = () => {
  return (
    <>


<div class="container">
  <div class="row">
    
    <div class="col">
    <button 
        className="btn btn-primary" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasRight" 
        aria-controls="offcanvasRight"
      >
        Toggle right offcanvas
      </button>

      {/* Right OffCanvas */}
      <div 
        className="offcanvas offcanvas-end" 
        tabIndex="-1" 
        id="offcanvasRight" 
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button 
            type="button" 
            className="btn-close text-reset" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          hehehehehe hehehe ehellloo heheheheh
        </div>
      </div>
    </div>
    <div class="col">
    <button 
        className="btn btn-primary" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasTop" 
        aria-controls="offcanvasTop"
      >
        Toggle top offcanvas
      </button>

      {/* Top OffCanvas */}
      <div 
        className="offcanvas offcanvas-top" 
        tabIndex="-1" 
        id="offcanvasTop" 
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Offcanvas top</h5>
          <button 
            type="button" 
            className="btn-close text-reset" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          hehehe hehe eheh ehehe heheheheh
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Button to toggle right OffCanvas */}
     

      {/* Button to toggle top OffCanvas */}
      
    </>
  );
}

export default OffCanvas;

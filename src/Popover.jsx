// Popover is an pop up bix that appear when the event is click
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Popover = () =>{
    return(
        <>
            <div className='container'>
            <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
            </div>
        </>
    )
}
export default Popover;
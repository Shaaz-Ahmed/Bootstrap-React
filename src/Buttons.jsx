import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Buttons = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 mb-3">
          <button type="button" className="btn btn-primary me-2">Primary</button>
          <button type="button" className="btn btn-secondary me-2">Secondary</button>
          <button type="button" className="btn btn-success me-2">Success</button>
          <button type="button" className="btn btn-danger me-2">Danger</button>
          <button type="button" className="btn btn-warning me-2">Warning</button>
          <button type="button" className="btn btn-info me-2">Info</button>
          <button type="button" className="btn btn-light me-2">Light</button>
          <button type="button" className="btn btn-dark me-2">Dark</button>
          <button type="button" className="btn btn-link">Link</button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Toast = () => {
    useEffect(() => {
        // Ensure that the Bootstrap JavaScript is loaded and accessible
        if (typeof window.bootstrap !== 'undefined') {
            const toastEl = document.querySelector('.toast');
            const toast = new window.bootstrap.Toast(toastEl);
            toast.show();
        } else {
            console.error("Bootstrap is not loaded");
        }
    }, []);

    return (
        <div className='container'>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..." />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>
    );
};

export default Toast;

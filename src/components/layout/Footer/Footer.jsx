import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-bar">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p3 mt-4 text-center bg-dark text-light">
                        Developed by
                        &nbsp;<a className="text-warning font-weight-normal" href="https://github.com/ofelipechan" rel="noopener noreferrer" target="_blank">Felipe Chan</a>
                        &nbsp;<i className="fab fa-github"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

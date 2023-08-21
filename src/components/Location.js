import React from 'react';
import '../styles/location.css';

const Location = () => {
    return (
        <div className="location-container">
            <h1 className="location-heading">Find Us</h1>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        className="gmap_iframe"
                        title="Club Location"
                        frameBorder="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=RTU,%20kota&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;

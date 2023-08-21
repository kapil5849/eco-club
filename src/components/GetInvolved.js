import React from 'react';
import '../styles/getinvolved.css';

const GetInvolved = () => {
    return (
        <div className="get-involved-container">
            <h2>Get Involved</h2>
            <p>Join us in making a difference. Get involved and be part of our mission to create a sustainable future for our planet.</p>
            <p>There are many ways you can contribute to the Eco Club:</p>
            <ul>
                <li>Participate in eco-friendly projects and initiatives</li>
                <li>Organize awareness campaigns and events to educate others about environmental sustainability</li>
                <li>Conduct research on sustainability topics to contribute to our knowledge base</li>
                <li>Collaborate with other organizations and groups to amplify our impact</li>
                <li>Share your ideas and initiatives to help shape the future direction of the club</li>
            </ul>
            <p style={{textDecoration:'underline'}}>No matter your background or level of expertise, we welcome your enthusiasm and commitment to making a positive change. Join us today and play an active role in creating a greener and more sustainable future.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3LHqS7drUZaZGs5W0OU-CMMhMo0hw9dRZvPWztsqSKgDCXw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                <button className="explore-button">Join Now</button>
            </a>
        </div>
    );
}

export default GetInvolved;

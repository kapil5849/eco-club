// import React from 'react';
// import '../styles/welcome.css';

// const Welcome = () => {
//   return (
//     <div className="welcome-container">
//       <div className="welcome-header">
//         <h1>Welcome to the Eco Club!</h1>
//         <p>Join us in making the world a greener place.</p>
//       </div>
//       <div className="welcome-content">
//         <p>We are dedicated to promoting sustainability, conservation, and environmental awareness.</p>
//         <p>Explore our initiatives, events, and ways you can get involved!</p>
//         <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3LHqS7drUZaZGs5W0OU-CMMhMo0hw9dRZvPWztsqSKgDCXw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
//           <button className="explore-button">Join Now</button>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Welcome;


import React from 'react';
import '../styles/welcome.css';
import BackgroundVideo from '../assets/ecovideo.mp4'; // Update the path accordingly

const Welcome = () => {
  return (
    <div className="welcome-container">
      <video className="background-video" autoPlay muted loop>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="welcome-content">
        <h1>Welcome to the Eco Club!</h1>
        <p>Join us in making the world a greener place.</p>
        <p>We are dedicated to promoting sustainability, conservation, and environmental awareness.</p>
        <p>Explore our initiatives, events, and ways you can get involved!</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3LHqS7drUZaZGs5W0OU-CMMhMo0hw9dRZvPWztsqSKgDCXw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
          <button className="explore-button">Join Now</button>
        </a>
      </div>
    </div>
  );
}

export default Welcome;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/eventplanner.css';

const EventPlanner = ({ place, date, heading, description }) => {
  return (
    <div className="event-planner">
      <div className="event-info">
        <h3 className="event-heading">{heading}</h3>
        <p className="event-date">{date}</p>
        <p className="event-place">{place}</p>
      </div>
      <p className="event-description">{description}</p>
    </div>
  );
}

EventPlanner.propTypes = {
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventPlanner;

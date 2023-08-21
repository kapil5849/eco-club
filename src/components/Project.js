import React from 'react';
import EventPlanner from './EventPlanner';
import '../styles/project.css';

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h1>Working Projects</h1>
      </div>
      <EventPlanner
        heading='Sustainable Community Gardens'
        description='Our initiative aims to establish community gardens in urban areas, promoting sustainable food production, educating communities about organic farming practices, and fostering a sense of community engagement.'
      />
      <EventPlanner
        heading='Plastic Waste Reduction Campaign'
        description='Our campaign focuses on raising awareness about the harmful effects of plastic waste on the environment and implementing strategies to reduce plastic consumption and promote recycling and waste management practices.'
      />
      <EventPlanner
        heading='Renewable Energy Adoption'
        description='Our project focuses on promoting the adoption of renewable energy sources, such as solar and wind power, in residential and commercial settings to reduce carbon emissions and promote sustainable energy practices.'
      />
      <EventPlanner
        heading='Waste Management and Recycling Program'
        description='Our program aims to implement effective waste management and recycling systems in collaboration with local communities, businesses, and government entities to minimize landfill waste and promote a circular economy.'
      />
      <EventPlanner
        heading='Biodiversity Conservation'
        description='Our project focuses on preserving and restoring local biodiversity by creating and maintaining wildlife habitats, conducting ecological surveys, and raising awareness about the importance of biodiversity conservation.'
      />
    </div>
  );
}

export default Project;

import React from 'react';
import EventPlanner from './EventPlanner';
import '../styles/events.css'

const Events = () => {
  return (
    <div className="events-container">
      <div className="events-header">
        <h2>Upcoming Events</h2>
      </div>
      <EventPlanner
        place="Clubhouse @ 5pm"
        date="Every Friday"
        heading="Eco Club Healthy Talk"
        description="Come and join us for our weekly Eco Club meet, where we discuss ongoing projects, plan future initiatives, and engage in environmental discussions. Open to all club members!"
      />
      <EventPlanner
        place="RTU main Campus"
        date="September 15, 2023"
        heading="Green Campus Cleanup"
        description="Join us for a day of cleaning up our campus and promoting a cleaner environment. Gloves and trash bags will be provided."
      />
      <EventPlanner
        place="Community Park"
        date="October 5, 2023"
        heading="Tree Planting Day"
        description="Help us plant trees and contribute to a healthier planet. Bring your gardening tools and enthusiasm!"
      />
      <EventPlanner
        place="Community Center"
        date="October 8, 2023"
        heading="Sustainable Fashion Workshop"
        description="Learn about sustainable fashion practices and how to reduce the environmental impact of the fashion industry. Attend workshops, fashion shows, and more!"
      />
      <EventPlanner
        place="Eco Club Campus"
        date="November 10, 2023"
        heading="Recycling Drive"
        description="Bring your recyclable items to our campus and help us reduce waste. We will be collecting plastic, paper, and glass."
      />
      <EventPlanner
        place="Convention Center"
        date="November 20-22, 2023"
        heading="Climate Change Symposium"
        description="Join us for a three-day symposium where experts, researchers, and activists come together to discuss the challenges and solutions to climate change."
      />
      <EventPlanner
        place="Community Park"
        date="December 1, 2023"
        heading="Community Cleanup"
        description="Join us for a day of cleaning up our community and promoting a cleaner environment. Gloves and trash bags will be provided."
      />
      <EventPlanner
        place="Eco Club Campus"
        date="January 15, 2024"
        heading="Green Campus Cleanup"
        description="Join us for a day of cleaning up our campus and promoting a cleaner environment. Gloves and trash bags will be provided."
      />
    </div>
  );
}

export default Events;

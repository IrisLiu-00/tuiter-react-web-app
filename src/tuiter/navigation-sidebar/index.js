import React from 'react';
import { Link } from 'react-router-dom';

const NavigationSidebar = ({ active = 'explore' }) => {
  return (
    <div className="list-group">
      <Link className="list-group-item" to="#">
        Tuiter
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}
        to="#"
      >
        Home
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}
        to="#"
      >
        Explore
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}
        to="#"
      >
        Notifications
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}
        to="#"
      >
        Messages
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}
        to="#"
      >
        Bookmarks
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}
        to="#"
      >
        Lists
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}
        to="#"
      >
        Profile
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}
        to="#"
      >
        More
      </Link>
    </div>
  );
};
export default NavigationSidebar;

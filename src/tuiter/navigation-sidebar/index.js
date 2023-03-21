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
        to="/tuiter"
      >
        <i className="bi bi-house-door-fill me-2"></i>
        Home
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}
        to="/tuiter/explore"
      >
        <i className="bi bi-hash me-2"></i>
        Explore
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}
        to="#"
      >
        <i className="bi bi-bell me-2"></i>
        Notifications
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}
        to="#"
      >
        <i className="bi bi-envelope me-2"></i>
        Messages
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}
        to="#"
      >
        <i className="bi bi-bookmark me-2"></i>
        Bookmarks
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}
        to="#"
      >
        <i className="bi bi-card-list me-2"></i>
        Lists
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}
        to="#"
      >
        <i className="bi bi-person me-2"></i>
        Profile
      </Link>
      <Link
        className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}
        to="#"
      >
        <i className="bi bi-three-dots me-2"></i>
        More
      </Link>
    </div>
  );
};
export default NavigationSidebar;

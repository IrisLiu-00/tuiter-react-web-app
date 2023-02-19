import React from 'react';
import './who-to-follow-list-item.css';

const WhoToFollowListItem = ({
  who = {
    userName: 'NASA',
    handle: 'NASA',
    avatarIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
  },
}) => {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <div className="d-flex">
        <img className="rounded-circle pfp-image me-3" src={who.avatarIcon}></img>
        <div>
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-sm rounded-pill my-2">
        Follow
      </button>
    </div>
  );
};

export default WhoToFollowListItem;

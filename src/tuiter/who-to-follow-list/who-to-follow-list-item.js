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
    <div class="list-group-item d-flex justify-content-between">
      <div class="d-flex">
        <img class="rounded-circle pfp-image me-3" src={who.avatarIcon}></img>
        <div>
          <div class="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-sm rounded-pill my-2">
        Follow
      </button>
    </div>
  );
};

export default WhoToFollowListItem;

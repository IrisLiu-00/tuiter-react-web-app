import React from 'react';
import './post-summary-item.css';

const PostSummaryItem = ({
  post = {
    topic: 'Space',
    userName: 'SpaceX',
    time: '2h',
    title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
  },
}) => {
  return (
    <div className="list-group-item d-flex justify-content-between p-3">
      <div className="me-3">
        <div className="text-muted fw-normal">
          {post.username} - {post.time}
        </div>
        <div className="fw-bold">{post.topic}</div>
        <div> {post.title}</div>
      </div>
      <img className="topic-image" src={post.image}></img>
    </div>
  );
};
export default PostSummaryItem;

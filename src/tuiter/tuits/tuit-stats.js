import React from 'react';

const TuitStats = ({ post }) => {
  // TODO: like and unlike tweets -  is this required?

  return (
    <div className="d-flex justify-content-between">
      <button class="btn">
        <i class="bi bi-chat me-1"></i>
        {post.replies}
      </button>
      <button class="btn">
        <i class="bi bi-arrow-repeat me-1"></i>
        {post.retuits}
      </button>
      <button class="btn">
        {post.liked ? <i class="bi bi-heart-fill text-danger me-1"></i> : <i class="bi bi-heart me-1"></i>}
        {post.likes}
      </button>
      <button class="btn">
        <i class="bi bi-share"></i>
      </button>
    </div>
  );
};

export default TuitStats;

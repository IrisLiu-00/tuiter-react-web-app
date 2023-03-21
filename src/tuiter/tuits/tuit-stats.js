import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTuitThunk } from '../../services/tuits-thunks';

const TuitStats = ({ post }) => {
  const dispatch = useDispatch();
  const onToggleLike = () => {
    dispatch(
      updateTuitThunk({
        ...post,
        likes: post.liked ? post.likes - 1 : post.likes + 1,
        liked: !post.liked,
      })
    );
  };

  const onToggleDislike = () => {
    dispatch(
      updateTuitThunk({
        ...post,
        dislikes: post.disliked ? post.dislikes - 1 : post.dislikes + 1,
        disliked: !post.disliked,
      })
    );
  };

  return (
    <div className="d-flex justify-content-between">
      <button className="btn">
        <i className="bi bi-chat me-1"></i>
        {post.replies}
      </button>
      <button className="btn">
        <i className="bi bi-arrow-repeat me-1"></i>
        {post.retuits}
      </button>
      <button className="btn" onClick={onToggleLike}>
        {post.liked ? <i className="bi bi-heart-fill text-danger me-1"></i> : <i className="bi bi-heart me-1"></i>}
        {post.likes}
      </button>
      <button className="btn" onClick={onToggleDislike}>
        {post.disliked ? (
          <i className="bi bi-hand-thumbs-down-fill text-danger me-1"></i>
        ) : (
          <i className="bi bi-hand-thumbs-down me-1"></i>
        )}
        {post.dislikes}
      </button>
      <button className="btn">
        <i className="bi bi-share"></i>
      </button>
    </div>
  );
};

export default TuitStats;

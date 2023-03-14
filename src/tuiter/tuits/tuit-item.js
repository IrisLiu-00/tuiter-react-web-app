import React from 'react';
import TuitStats from './tuit-stats';
import { useDispatch } from 'react-redux';
import { deleteTuit } from '../reducers/tuits-reducer';

const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <div className="list-group-item d-flex justify-content-between px-3 py-2">
      <img className="rounded-circle pfp-image me-3" height="35px" width="35px" src={post.image}></img>
      <div className="mt-1 flex-grow-1">
        <i className="btn bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
        <div className="text-muted fw-normal">
          <span className="text-dark fw-bold">{post.userName}</span>
          <i class="bi bi-check-circle-fill ms-1 me-2 text-primary"></i>
          {post.handle} - {post.time}
        </div>
        <div className="mb-1"> {post.tuit}</div>
        <TuitStats post={post} />
      </div>
    </div>
  );
};
export default TuitItem;

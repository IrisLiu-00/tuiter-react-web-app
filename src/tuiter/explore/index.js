import React from 'react';
import PostSummaryList from '../post-summary-list';
import TweetsPage from '../components/tweets-page';
import { Link } from 'react-router-dom';
import './index.css';

const ExploreComponent = () => {
  return (
    <TweetsPage pageName="explore">
      <>
        <div className="d-flex align-items-center">
          <input className="ovr-input-search form-control" type="text" placeholder="Search Tuiter" />
          <i className="bi bi-gear-fill fs-2 text-primary ms-3"></i>
        </div>
        <ul className="nav nav-pills mt-2">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">
              For You
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Trending
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Sports
            </Link>
          </li>
          <li className="nav-item d-md-block d-none">
            <Link className="nav-link" to="#">
              Entertainment
            </Link>
          </li>
        </ul>
        <div className="mt-2 mb-4">
          <div className="position-relative">
            <img className="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" />
            <div className="text-overlay fs-2 fw-bold text-white">SpaceX's Starship</div>
          </div>
          <PostSummaryList />
        </div>
      </>
    </TweetsPage>
  );
};
export default ExploreComponent;

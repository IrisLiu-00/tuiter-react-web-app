import PostSummaryList from './PostSummaryList/index.js';

const ExploreComponent = () => {
  return `
    <div class="d-flex align-items-center">
        <input class="form-control ovr-input-search" type="text" placeholder="Search Tuiter" />
        <i class="fas fa-cog fs-mega text-primary ms-3"></i>
    </div>
    <ul class="nav nav-tabs mt-2">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">For You</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">Sports</a>
        </li>
        <li class="nav-item d-md-block d-none">
            <a class="nav-link">Entertainment</a>
        </li>
    </ul>
    <div class="mt-2 mb-4">
        <div class="position-relative">
            <img class="img-fluid"
                src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" />
            <div class="text-overlay fs-2 fw-bold text-white">SpaceX's Starship</div>
        </div>
        ${PostSummaryList()}
    </div>
    `;
};
export default ExploreComponent;

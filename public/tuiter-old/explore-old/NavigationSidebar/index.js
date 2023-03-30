const NavigationSidebar = () => {
  return `
   <div class="list-group">
      <div class="list-group-item"><i class="fab fa-twitter"></i></div>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-home"></i>
          <span class="d-none d-xl-inline">Home</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          <i class="fa fa-solid fa-hashtag"></i>
          <span class="d-none d-xl-inline">Explore</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-bell"></i>
          <span class="d-none d-xl-inline">Notifications</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-envelope"></i>
          <span class="d-none d-xl-inline">Messages</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-bookmark"></i>
          <span class="d-none d-xl-inline">Bookmarks</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-list"></i>
          <span class="d-none d-xl-inline">Lists</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-user"></i>
          <span class="d-none d-xl-inline">Profile</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-ellipsis-h"></i>
          <span class="d-none d-xl-inline">More</span>
      </a>
      <button type="button" class="btn btn-primary mt-2 ovr-btn-round">
          Tuit
      </button>
  </div>
 `;
};
export default NavigationSidebar;

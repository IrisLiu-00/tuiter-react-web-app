const WhoToFollowListItem = (who) => {
  return `
   <div class="list-group-item d-flex justify-content-between">
        <div class="d-flex">
            <img class="rounded-circle pfp-image me-3"
                src=${who.avatarIcon}></img>
            <div>
                <div class="fw-bold">
                    ${who.userName}
                    <i class="fas fa-check-square"></i>
                </div>
                <div>@${who.handle}</div>
            </div>
        </div>
        <button type="button" class="btn btn-primary btn-sm ovr-btn-round my-2">
            Follow
        </button>
    </div>
 `;
};
export default WhoToFollowListItem;

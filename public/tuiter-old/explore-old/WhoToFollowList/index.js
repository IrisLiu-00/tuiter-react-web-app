import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';
const WhoToFollowList = () => {
  return `
    <div class="list-group">
        <div class="list-group-item fw-bold">Who To Follow</div>
        ${who.map((w) => WhoToFollowListItem(w)).join('')}
    </div>
    `;
};
export default WhoToFollowList;

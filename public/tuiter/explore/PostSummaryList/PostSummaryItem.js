const PostSummaryItem = (post) => {
  return `
   <div class="list-group-item d-flex justify-content-between p-3">
        <div class="me-3">
            <div class="text-muted fw-medium">${post.topic}</div>
            <div class="fw-bold">
                ${post.userName}
                <i class="fas fa-check-square"></i>
                <span class="text-muted fw-medium">- ${post.time}</span>
            </div>
            <div class="fw-bold">
                ${post.title}
            </div>
            ${post.tweets ? `<div class="text-muted fw-medium">${post.tweets} Tweets</div>` : ''}
        </div>
        <img class="topic-image" src=${post.image}></img>
    </div>
 `;
};
export default PostSummaryItem;

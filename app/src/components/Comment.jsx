function Comment({ comment }) {
  return (
    <div className="comment-card">
      <div className="user">
        <p className="name">
          <b>{comment.name}</b>
        </p>
      </div>
      <div className="text">
        <p className="comment">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;

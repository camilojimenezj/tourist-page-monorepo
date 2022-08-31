import styles from '../styles/comments.module.css'

function Comment({ comment }) {
  return (
    <div className={styles.commentCard}>
      <div className={styles.user}>
        <p>
          <b>{comment.name}</b>
        </p>
      </div>
      <div className={styles.text}>
        <p>{comment.comment}</p>
      </div>
    </div>
  )
}

export default Comment

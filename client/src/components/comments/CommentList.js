import Comment from './Comment';

const CommentList = ({ comments }) => (
  <>
    { comments.map( c => 
      <Comment 
        key={c.id}
        {...c}
      />
    )}
  </>
)

export default CommentList;
import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface Props {
  post: Post
}

export const PostInfo:React.FC<Props> = ({
  post: {
    body,
    comments,
    title,
    user,
  },
}) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      {user && (
        <UserInfo user={user} />
      )}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    {comments.length ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">
        No comments yet
      </b>
    )}
  </li>
);
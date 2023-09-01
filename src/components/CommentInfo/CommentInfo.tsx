import React from 'react';
import { Comment } from '../../types/Comment';

interface Props {
  comment: Comment
}

export const CommentInfo: React.FC<Props> = ({
  comment: {
    body,
    email,
    name,
  },
}) => (
  <li className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </li>
);
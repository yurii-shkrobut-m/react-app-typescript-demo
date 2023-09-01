import './App.scss';

import postsFromServer from './api/posts.json';
// import initialPosts from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { useState } from 'react';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId)
    || null;
}

function getCommentById(id: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === id)
    || null;
}

const initialPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

function getPreparedPosts(posts: Post[]) {
  let preparedPosts = [...posts]

  return preparedPosts
}

export const App = () => {
  const [query, setQuery] = useState('');
  const [sortField, setSortField] = useState('');

  const visiblePosts = getPreparedPosts(initialPosts)

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={visiblePosts} />

    </section>
  )
};

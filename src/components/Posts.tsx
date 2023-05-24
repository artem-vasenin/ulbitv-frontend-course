import { postAPI } from '../services/post-service';
import React from 'react';

export const Posts = () => {
  const {data: posts} = postAPI.useGetPostsQuery(10)

  return (
    <section>
      <ol>
        {posts && posts.map(i => (
          <li key={i.id}>
            <p>{i.id}. {i.title}</p>
            <p>{i.body}</p>
            <button>Delete</button>
          </li>
        ))}
      </ol>
    </section>
  );
};

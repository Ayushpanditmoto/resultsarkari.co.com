import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import { PostType } from "@/types/PostType";

function PostCard({ posts }: { posts: PostType[] }) {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <PostCardContainer key={post.id}>
          <h2>{post.title}</h2>
          {/* <p>{post.attributes.content}</p> */}
          <Link href={`/posts/${post.id}` }>Read More</Link>
        </PostCardContainer>
      ))}
    </>
  );
}

export default PostCard;

const PostCardContainer = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;
    margin: 1rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
`;

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { PostType } from "@/types/PostType";
type PostBoxProps = {
  title: string;
  viewall: string;
  data: PostType[];
};

//default props
PostBox.defaultProps = {
  title: "New Post",
  viewall: "/",
  data: [],
};

const DataZero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

function PostBox({ title, data, viewall }: PostBoxProps) {
  return (
    <PostBoxC>
      <h3>{title}</h3>
      {data.length === 0 && <DataZero />}
      {data.length === 0 && (
        <div className="flex justify-center mt-5 items-center">
          <p>No Data</p>
        </div>
      )}
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <span></span>
              <Link
                href={{
                  pathname: "/[slug]",
                  query: { slug: item.slug },
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {data.length > 0 && (
        <div className="viewall">
          <Link href={viewall}>View All</Link>
        </div>
      )}
    </PostBoxC>
  );
}

export default PostBox;

const PostBoxC = styled.div`
  width: 400px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* padding: 1rem; */
  margin: 1rem;
  a {
    color: #000;
  }
  .viewall {
    text-align: center;
    padding: 1rem;
    a {
      font-size: 1.2rem;
      font-weight: 700;
      color: #000;
      text-decoration: none;
    }
  }
  h3 {
    font-size: 1.2rem;
    background-color: var(--primary-color);
    color: #ffffff;
    padding: 0.5rem;
    border-radius: 5px 5px 0 0;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
  }
  ul {
    padding: 0 1rem;
    li {
      background-color: #ffffff;
      font-size: 0.9rem;
      padding: 0.3rem;
      font-weight: 400;
      // margin-bottom: 1rem;
      span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #646464;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }
  }
`;

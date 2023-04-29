import React from 'react'
import styled from 'styled-components';

function PostContainer({children}: {children: React.ReactNode}) {
  return (
    <>
        <PostC>
            {children}
            
        </PostC>
    </>
  )
}

export default PostContainer

const PostC = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    margin: 20 auto;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 1.3rem;
    background-color: #ffffff;
    color: #000000;
    div{
        a{
            font-size: 1.5rem;
            font-weight: 700;
            color: #000000;
            text-decoration: none;

        }

    }
    img{
        padding: 1rem 0;
    }

`
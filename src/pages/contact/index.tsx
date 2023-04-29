import CenterC from '@/Layout/center'
import PostContainer from '@/Layout/layout'
import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
    <div>
      <CenterC>
        <PostContainer>

<FormC>

      <h1>Contact</h1>
      
      <p>Sent a Message</p>

      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        
        <p>
         
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      </FormC>

      </PostContainer>

      </CenterC>
        
    </div>
  )
}

export default Contact

const FormC = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 30 auto;
  align-items: center;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  padding: 1rem 2rem;
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
  input{
      padding: 0.5rem;
      margin: 0.5rem;
      border: 1px solid #000000;
      border-radius: 5px;
      width: 100%;

  }
`


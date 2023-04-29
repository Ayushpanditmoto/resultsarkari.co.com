import React from 'react'
import styled from 'styled-components'

function NotFound() {
  return (
    <>
    <Container>
      <h1>404</h1>
      <h2>
        Page Not Found
      </h2>
    </Container>
    </>
  )
}

export default NotFound

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  background-color: #fff;
  color: #000;
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
  h2{
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

`
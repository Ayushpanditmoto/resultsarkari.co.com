import React from 'react'
import styled from 'styled-components';

function Center({children}: {children: React.ReactNode}) {
  return (
    <>
        <CenterC>
            {children}
            </CenterC>
    </>
    
  )
}

export default Center

const CenterC = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    `

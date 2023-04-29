import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

function AppSection() {
  return (
    <AppSectionS>
        <h1>Our Top 10 Apps</h1>
        <div className='appcontain'>
            {Array(10).fill(0).map((_, i) => (
                <Image key={i} src='/wbjee.png' alt='app' width={60} height={60}/>
            ))    
            }
        </div>
    </AppSectionS>
  )
}

export default AppSection

const AppSectionS = styled.section`
    background-color: #fff;
    color: #000;
    width: 100vw;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 1rem;
    h1{
        text-align : center;
    }
    .appcontain{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1rem;
        height: 100%;
        img {
            width: 60px;
            height: auto;
            border-radius: 10px;
            margin: 0.3rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        }
    }

`


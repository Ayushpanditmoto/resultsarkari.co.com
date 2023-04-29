import React from 'react'
import styled from 'styled-components'

function FooterOne() {
  return (
    <FooterContainer>
        <div>
            <h1>Esarkari.in</h1>
            <p>Esarkari.in is a website where you can find all the latest gove
            </p>
            <p>
            The job market in India has been hit hard by the COVID-19 pandemic, causing many small businesses and multinational companies to reconsider their staffing requirements. In August 2021 alone, over 1.5 million people in rural and urban areas lost their jobs.
            </p>
            <p>If you&apos;re an Indian citizen who is unemployed due to the pandemic or the fluctuating job market, or if you &apos;re a recent graduate looking for your first job, you might be considering whether a government job is the right choice for you.</p>

<p> Sarkari Result is a valuable resource that can help you explore the benefits of a government job in India and find a stable, long-term position that&apos;s a good fit for your skills and experience.</p>
        </div>

        </FooterContainer>


        

      )
}

export default FooterOne

const FooterContainer = styled.footer`
    background-color: #000;
    color: #fff;
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 2rem;
    div{
        h1{
            font-size: 2rem;
            font-weight: 700;
        }
        p{
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 1rem;
        }
    }
`

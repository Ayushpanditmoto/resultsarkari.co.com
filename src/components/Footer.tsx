import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <FooterContainer>
        <ul>
          
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <a href="/sitemap.xml">Sitemap</a>
          </li>

        </ul>
        <p>
          © {year} <Link href="/">resultsarkari.co.com</Link>
        </p>
      </FooterContainer>
    </>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  ul {
    margin-bottom: 1rem;
    list-style: none;
    display: flex;
   
    justify-content: center;
    align-items: center;
    //media query
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    li {
      @media screen and (max-width: 768px) {
        margin: 0.5rem 0;
      }
      margin: 0 1rem;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          color: #06b785;
          
        }
      }
    }
  }
  p {
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: #06b785;
      }
    }
  }
`;

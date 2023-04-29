import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
function Header() {
  const [showNav, setShowNav] = useState(false);
    const router = useRouter();

  const ResetClick=()=>{
    setShowNav(false);
    }
    useEffect(() => {
        setShowNav(false);
    }, [router.asPath]);

  return (
    <>
      {/* Mobile navbar */}
      <MobileNavbar>
      <Link href="/">
          Esarkari
        </Link>
        <MenuButton onClick={() => setShowNav(!showNav)}>
          <FaBars />
        </MenuButton>
        
      </MobileNavbar>
      {showNav && (
        <MobileNavLinks>
            <Link href="/about">
                About
            </Link>
            <Link href="/services">
                Services
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </MobileNavLinks>
      )}

      {/* Desktop navbar */}
      <DesktopNavbar>
        <Link href="/">
          Esarkari
        </Link>
        <NavLinks>
          <Link href="/about"
          >
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </NavLinks>
      </DesktopNavbar>
    </>
  );
}

export default Header;

const MobileNavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.2rem;
    background-color: var(--primary-color);
    padding: 1rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

    a{
        color: #ffffff;
        font-weight: 500;
    }

`;

const MobileNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  a{
    font-size: 1.5rem;
    font-weight: 500;
    color: #323232;
    text-decoration: none;
  }
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  a{
    font-size: 1.3rem;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #000;
    }
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: #333;
    font-size: 1.5rem;
  }
`;



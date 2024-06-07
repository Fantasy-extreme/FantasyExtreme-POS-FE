'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../assets/images/logo.png';
import Guy from '../../assets/images/Group_234.png';
import Link from 'next/link';
import { useAuthStore } from '@/store/useStore';
import { ConnectPlugWalletSlice } from '@/types/store';
import authMethods from '@/lib/auth';
import RingLoader from 'react-spinners/RingLoader';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { isConnected } from '../utils/fantasy';

export default function NavBar() {
  const [isLoading, setIsLoading] = useState(false);
  const { auth, userAuth } = useAuthStore((state) => ({
    auth: (state as ConnectPlugWalletSlice).auth,
    userAuth: (state as ConnectPlugWalletSlice).userAuth,
  }));
  const handleClose = () => {
    setIsLoading(false);
  };

  const methods = authMethods({
    useAuthStore,
    setIsLoading,
    handleClose,
  });
  function copyPrincipal() {
    window.navigator.clipboard.writeText(
      auth.identity.getPrincipal().toString()
    );
    toast.success('Principal copied to clipboard', { autoClose: 750 });
  }

  useEffect(() => {
    if (auth) {
      methods.initAuth();
    }
  }, []);

  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='/'>
            {' '}
            <Image width={282} height={39} src={Logo} alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='my-lg-0 me-auto my-2'
              style={{ maxHeight: '100vh' }}
              navbarScroll
            >
              <Nav.Link as={Link} href='#'>
                Matches
              </Nav.Link>
              {/* <Nav.Link href='#action2'>Schedule</Nav.Link>
              <Nav.Link href='/players'>Players</Nav.Link>
              <Nav.Link href='#action2'>Media</Nav.Link> */}
              <Nav.Link href='#action2'>Contact</Nav.Link>
              {isConnected(auth.state) ? (
                <Button
                  onClick={methods.logout}
                  disabled={isLoading}
                  className='reg-btn'
                >
                  {!isLoading && 'Log out'}
                  <RingLoader loading={isLoading} />
                </Button>
              ) : (
                <Button
                  onClick={methods.login}
                  disabled={isLoading}
                  className='reg-btn'
                >
                  {!isLoading && 'Connect'}
                  <RingLoader size={20} loading={isLoading} />
                </Button>
              )}
              {auth.state === 'initialized' && (
                <Nav.Link className='custom'>
                  {userAuth?.name ?? ''}{' '}
                  <Image alt='Profile' height={20} width={20} src={Guy} />
                </Nav.Link>
              )}

              <NavDropdown
                title={<i className='fa fa-bars'></i>}
                id='navbarScrollingDropdown'
              >
                {isConnected(auth.state) && (
                  <>
                    <NavDropdown.Item onClick={copyPrincipal}>
                      Copy Principal
                    </NavDropdown.Item>
                  </>
                )}
      
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

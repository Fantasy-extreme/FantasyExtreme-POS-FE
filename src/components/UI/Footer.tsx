'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import arrowbtn from '../../assets/images/icons/icon-arrow.png';
export default function Footer() {
  const [isVisible3, setIsVisible3] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('Footer');
      if(!element)return;
      const rect = element.getBoundingClientRect();
      const isVisible3 = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible3) {
        setIsVisible3(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container fluid id='Footer'
        className={
          isVisible3 == true ? 'animate footer' : 'footer'
        }
        >
        <Row>
          <Container>
            <Row>
              <Col xl='4' lg='4' md='12'>
                <h6>Contact Info</h6>
                <p>
                  We're a professional football club in Kolkata, India, founded
                  in 1990. It is a long established fact.
                </p>
                <ul className='social-media-list'>
                  <li>
                    <Link href='#' target='_blank'>
                      <i className='fa fa-facebook-square'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='#' target='_blank'>
                      <i className='fa fa-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='#' target='_blank'>
                      <i className='fa fa-instagram'></i>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xl='4' lg='4' md='12'>
                <h6>Resources</h6>
                <ul className='footer-list'>
                  <li>
                    <Link href='#'>Matches</Link>
                  </li>
                  <li>
                    <Link href='#'>Players</Link>
                  </li>
                  <li>
                    <Link href='#'>The Club</Link>
                  </li>
                  <li>
                    <Link href='#'>Media</Link>
                  </li>
                  <li>
                    <Link href='#'>Member</Link>
                  </li>
                  <li>
                    <Link href='#'>Shop</Link>
                  </li>
                  <li>
                    <Link href='#'>News</Link>
                  </li>
                  <li>
                    <Link href='#'>Contact</Link>
                  </li>
                </ul>
              </Col>
              <Col xl='4' lg='4' md='12'>
                <h6>Newsletter</h6>
                <p>
                  We'll send updates straight to your Mail. Let's Do stay
                  connected!
                </p>
                <Form>
                  <Form.Control type='email' placeholder='name@example.com' />
                  <Button>
                    <Image src={arrowbtn} alt='Arrow Button' />
                  </Button>
                </Form>
              </Col>
              <Col
                xl='12'
                lg='12'
                md='12'
                className='footer-bottom text-center'
              >
                <p>Copyright 2022 Soccer FC Club, All Right Reserved</p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

'use client';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import matchbg3 from '../assets/images/bg/bg-trans-3.png';
import Header from '@/components/UI/Header';
import FantasyPlayers from '@/components/UI/FantasyPlayers';
import LatestResult from '@/components/UI/LatestResult';
import { ConnectPlugWalletSlice } from '@/types/store';
import { useAuthStore } from '@/store/useStore';
import { MATCHES } from '@/constant/data';

export default function HomePage() {
  const { auth } = useAuthStore((state) => ({
    auth: (state as ConnectPlugWalletSlice).auth,
  }));
  return (
    <>
      <Header match={MATCHES[0]} />

      {/* matches Result Panel */}
      <Container fluid id='MatchResult' className={'matches-result-panel'}>
        <Row>
          <Container>
            <Row>
              <Col xl='8' lg='8' md='12' sm='12'>
                <div className='flex-div-xs'>
                  <h4>Upcoming Matches</h4>
                  <div className='d-flex sm'>
                    <Dropdown className='trans red'>
                      <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        Filter by league <i className='fa fa-angle-down'></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href='#/action-3'>
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Link href={'#'} className={'reg-btn pe-none'}>
                      All Matches <i className='fa fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
                <div className='spacer-20' />
                <Row>
                  {MATCHES.slice(1, 5).map((match) => {
                    return (
                      <Col xl='6' lg='6' md='6' sm='12'>
                        <div className='match-post team'>
                          <div className='bg-layer'>
                            <Image src={matchbg3} alt='bg' />
                          </div>
                          <h5>{match.location}</h5>
                          <h6>{match.time}</h6>
                          <ul>
                            <li>
                              <Image
                                src={match.homeTeam[0].logo
                                  .replace('h=40', 'h=200')
                                  .replace('w=40', 'w=200')}
                                width={90}
                                height={90}
                                alt='Italy'
                              />
                              <p>{match.homeTeam[0].name}</p>
                            </li>
                            <li>
                              <p>
                                V<br></br>S
                              </p>
                            </li>
                            <li>
                              <Image
                                src={match.awayTeam[0].logo
                                  .replace('h=40', 'h=200')
                                  .replace('w=40', 'w=200')}
                                width={90}
                                height={90}
                                alt='Italy'
                              />
                              <p>{match.awayTeam[0].name}</p>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <Col xl='4' lg='4' md='12' sm='12'>
                <LatestResult />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      {/* matches Result Panel */}

      {/* History Panel */}
      <Container fluid id='History' className={'history-panel'}>
        <Row>
          <Container>
            <Row>
              <Col xl='12' lg='12' md='12' sm='12'>
                <h3>Our History</h3>
                <h2>
                  About <span>Fantasy</span>
                </h2>
                <p>
                  Take your love for soccer to the next level with fantasy
                  football,Build your own virtual dream team by drafting real
                  footballers. Their performances on the pitch - goals scored,
                  assists made, clean sheets kept - translate into points for
                  your team. You'll compete against friends or online leagues,
                  strategizing your picks, managing injuries, and watching your
                  team rack up. It's a fun and engaging way to experience the
                  beautiful game, combining the thrill of real-world soccer with
                  the challenge of building and managing your own champion
                  squad.
                </p>
                <Link href='#' className='reg-btn mid'>
                  About More <i className='fa fa-arrow-right'></i>
                </Link>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      {/* History Panel */}

      {/* Top Fantasy Player */}
      <Container fluid id='Fantasy' className={'top-fantasy-panel'}>
        <Row>
          <Container>
            <Row>
              <Col xl='12' lg='12' md='12' sm='12'>
                <div className='flex-div'>
                  <h4>Top Fantasy Players</h4>
                  <Link href='#' className='reg-btn'>
                    Show All <i className='fa fa-arrow-right'></i>
                  </Link>
                </div>
                <div className='spacer-30' />
              </Col>
              <FantasyPlayers />
            </Row>
          </Container>
        </Row>
      </Container>
      {/* Top Fantasy Player */}
    </>
  );
}

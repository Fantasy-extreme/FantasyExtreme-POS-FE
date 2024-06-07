'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, Button, Container, Table } from 'react-bootstrap';
import cart from '../../assets/images/icons/icon-cart.png';
import heart from '../../assets/images/icons/icon-heart.png';
import batch1 from '../../assets/images/Batch/Batch-2.png';
import batch2 from '../../assets/images/Batch/Batch-1.png';
import trophy1 from '../../assets/images/icons/icon-Trophy-1.png';
import trophy2 from '../../assets/images/icons/icon-Trophy-2.png';
import trophy3 from '../../assets/images/icons/icon-Trophy-3.png';
import { useRouter } from 'next/navigation';
import BeatLoader from 'react-spinners/BeatLoader';

export default function Header({ match }: any) {
  const navigation = useRouter();
  return (
    <>
      <Container fluid className='header'>
        <Carousel fade>
          <Carousel.Item>
            <div className='bg-layer'></div>
            <div className='text-panel'>
              <div className='text-inner'>
                <h1>
                  Fantasy <span>Sports</span>
                </h1>
                <p>
                  Take your soccer fandom to the next level! Draft real stars to
                  build your ultimate fantasy team. Their on-field magic -
                  goals, assists, clean sheets - becomes your points.
                </p>
                <Button className='reg-btn mid'>How to play</Button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='bg-layer'></div>
            <div className='text-panel'>
              <div className='text-inner'>
                <h1>
                  Buy <span>Tokens</span>
                </h1>
                <p>
                  Fuel your passion and play to win! Our unique token serves a
                  dual purpose. Earn them as exciting rewards for in-game
                  achievements and outstanding performance.
                </p>
                <Link href='#' className='reg-btn mid'>
                  Buy tokens
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='bg-layer'></div>
            <div className='text-panel'>
              <div className='text-inner'>
                <h1>
                  Next <span>Match</span>
                </h1>
                <p>
                  Assemble your ideal squad for the upcoming match and prepare
                  to experience the game at a whole new level.
                </p>
                <Button className='reg-btn mid'>Play</Button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <ul className='side-links'>
          <li>
            <Link href='#'>
              <Image src={cart} alt='cart' />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image src={heart} alt='heart' />
            </Link>
          </li>
        </ul>
        <div className='match-board'>
          <div className='match-board-display'>
            <div className='match-head'>
              <h2>Upcoming Match</h2>
            </div>
            {match ? (
              <div
                className='match-body team'
                // onClick={() =>
                //   navigation.push(`/players?teamId=${match.homeTeam[0]?.id}`)
                // }
              >
                <h4>{'La Liga 2023-24'}</h4>
                <ul>
                  <li>
                    <Image
                      src={match.homeTeam[0].logo
                        .replace('h=40', 'h=200')
                        .replace('w=40', 'w=200')}
                      width={60}
                      height={69}
                      alt='Italy'
                    />
                    {/* <Image src={batch1} alt='Batch' /> */}
                  </li>
                  <li>
                    {/* <span>19:20pm</span> */}
                    <span>{match.hoursx}</span>
                    <h5>{match.time}</h5>
                  </li>
                  <li>
                    <Image
                      src={match.awayTeam[0].logo
                        .replace('h=40', 'h=200')
                        .replace('w=40', 'w=200')}
                      width={60}
                      height={69}
                      alt='Italy'
                    />
                    {/* <Image src={batch2} alt='Batch' /> */}
                  </li>
                </ul>
                <p>{match.location}</p>
              </div>
            ) : (
              <div className='d-flex justify-content-center my-3'>
                <BeatLoader color='white' size={15} />
                {/* <Spinner /> */}
              </div>
            )}
          </div>
          <div className='match-board-display'>
            <div className='match-head'>
              <h2>Top Earners</h2>
            </div>
            <div className='match-body'>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Tokens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Image src={trophy1} alt='trophy1' /> Anton Castio
                    </td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>
                      <Image src={trophy2} alt='trophy1' /> El Tigre
                    </td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>
                      <Image src={trophy3} alt='trophy1' /> Philly Barzaga
                    </td>
                    <td>12</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className='bottom-bar'>
          {/* <Container>
            <div className='flex-div'>
              <div className='new-span'>
                <span>Latest</span>
                <span>News</span>
              </div>
              <ul className='live-pnl'>
                <li>
                  <Link href='#'>
                    {' '}
                    Live Football Scores, Fixtures & Results
                  </Link>
                </li>
                <li>
                  <Link href='#'> Egals St Club 1 - 0 Defeat to FC Main</Link>
                </li>
              </ul>
            </div>
          </Container> */}
        </div>
      </Container>
    </>
  );
}

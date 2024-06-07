'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Player1 from '@/assets/images/players/player-1.png';
import Player2 from '@/assets/images/players/player-2.png';
import Player3 from '@/assets/images/players/player-3.png';
import Player4 from '@/assets/images/players/player-4.png';
import arrowbtn from '@/assets/images/icons/icon-arrow.png';
export default function FantasyPlayers() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 991, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div className='slide-padding'>
          <Link href='#' className='player-post'>
            <div className='img-pnl'>
              <div className='bg-layer'>
                <Image src={arrowbtn} alt='Arrow Button' />
              </div>
              <Image src={Player1} alt='Ores Luperto' />
            </div>
            <div className='txt-pnl'>
              <div className='slide-padding'>
                <h5>Ores Luperto</h5>
                <p>STRIKER</p>
              </div>
              <span>658</span>
            </div>
          </Link>
        </div>
        <div className='slide-padding'>
          <Link href='#' className='player-post'>
            <div className='img-pnl'>
              <div className='bg-layer'>
                <Image src={arrowbtn} alt='Arrow Button' />
              </div>
              <Image src={Player2} alt='Ores Luperto' />
            </div>
            <div className='txt-pnl'>
              <div className='slide-padding'>
                <h5>Dominick Dumbleton</h5>
                <p>STRIKER</p>
              </div>
              <span>542</span>
            </div>
          </Link>
        </div>
        <div className='slide-padding'>
          <Link href='#' className='player-post'>
            <div className='img-pnl'>
              <div className='bg-layer'>
                <Image src={arrowbtn} alt='Arrow Button' />
              </div>
              <Image src={Player3} alt='Ores Luperto' />
            </div>
            <div className='txt-pnl'>
              <div className='slide-padding'>
                <h5>Jores Leperto</h5>
                <p>Defender</p>
              </div>
              <span>524</span>
            </div>
          </Link>
        </div>
        <div className='slide-padding'>
          <Link href='#' className='player-post'>
            <div className='img-pnl'>
              <div className='bg-layer'>
                <Image src={arrowbtn} alt='Arrow Button' />
              </div>
              <Image src={Player4} alt='Ores Luperto' />
            </div>
            <div className='txt-pnl'>
              <div className='slide-padding'>
                <h5>Sebasti Nikola</h5>
                <p>Forward</p>
              </div>
              <span>478</span>
            </div>
          </Link>
        </div>
        <div className='slide-padding'>
          <Link href='#' className='player-post'>
            <div className='img-pnl'>
              <div className='bg-layer'>
                <Image src={arrowbtn} alt='Arrow Button' />
              </div>
              <Image src={Player1} alt='Ores Luperto' />
            </div>
            <div className='txt-pnl'>
              <div className='slide-padding'>
                <h5>Ores Luperto</h5>
                <p>STRIKER</p>
              </div>
              <span>658</span>
            </div>
          </Link>
        </div>
        <div className='slide-padding'>
          <Link href='#' className='player-post'>
            <div className='img-pnl'>
              <div className='bg-layer'>
                <Image src={arrowbtn} alt='Arrow Button' />
              </div>
              <Image src={Player2} alt='Ores Luperto' />
            </div>
            <div className='txt-pnl'>
              <div className='slide-padding'>
                <h5>Dominick Dumbleton</h5>
                <p>STRIKER</p>
              </div>
              <span>542</span>
            </div>
          </Link>
        </div>
        <div className='slide-padding'>
          <Link href='#' className='player-post'>
            <div className='img-pnl'>
              <div className='bg-layer'>
                <Image src={arrowbtn} alt='Arrow Button' />
              </div>
              <Image src={Player3} alt='Ores Luperto' />
            </div>
            <div className='txt-pnl'>
              <div className='slide-padding'>
                <h5>Jores Leperto</h5>
                <p>Defender</p>
              </div>
              <span>524</span>
            </div>
          </Link>
        </div>
        <div className='slide-padding'>
          <Link href='#' className='player-post'>
            <div className='img-pnl'>
              <div className='bg-layer'>
                <Image src={arrowbtn} alt='Arrow Button' />
              </div>
              <Image src={Player4} alt='Ores Luperto' />
            </div>
            <div className='txt-pnl'>
              <div className='slide-padding'>
                <h5>Sebasti Nikola</h5>
                <p>Forward</p>
              </div>
              <span>478</span>
            </div>
          </Link>
        </div>
      </Slider>
    </>
  );
}

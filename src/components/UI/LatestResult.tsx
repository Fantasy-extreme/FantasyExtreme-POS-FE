'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Batch1 from '../../assets/images/icons/icon-batch-1.png';
import Batch2 from '../../assets/images/icons/icon-batch-2.png';
import arrowbtn from '../../assets/images/icons/icon-arrow.png';
export default function LatestResult() {
  return (
    <>
      <div className='flex-div'>
        <h4>Latest Results</h4>
        <Button className='reg-btn empty'>
          <Image src={arrowbtn} alt='Arrow Button' />
        </Button>
      </div>
      <div className='spacer-20'></div>
      <div className='latest-result-panel'>
        <ul className='latest-result-list'>
          <li>
            <Link href='#'>
              <div className='flex-div'>
                <h6>
                  Italy FC. <Image src={Batch1} alt='Batch' />
                </h6>
                <h5>1 - 2</h5>
                <h6>
                  Italy FC. <Image src={Batch2} alt='Batch' />
                </h6>
              </div>
              <p>
                <i className='fa fa-map-marker'></i> Nov 2, 2022/ SGM Stadium
              </p>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <div className='flex-div'>
                <h6>
                  Italy FC. <Image src={Batch1} alt='Batch' />
                </h6>
                <h5>2 - 0</h5>
                <h6>
                  Italy FC. <Image src={Batch2} alt='Batch' />
                </h6>
              </div>
              <p>
                <i className='fa fa-map-marker'></i> Nov 2, 2022/ SGM Stadium
              </p>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <div className='flex-div'>
                <h6>
                  Italy FC. <Image src={Batch1} alt='Batch' />
                </h6>
                <h5>1 - 2</h5>
                <h6>
                  Italy FC. <Image src={Batch2} alt='Batch' />
                </h6>
              </div>
              <p>
                <i className='fa fa-map-marker'></i> Nov 2, 2022/ SGM Stadium
              </p>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <div className='flex-div'>
                <h6>
                  Italy FC. <Image src={Batch1} alt='Batch' />
                </h6>
                <h5>1 - 2</h5>
                <h6>
                  Italy FC. <Image src={Batch2} alt='Batch' />
                </h6>
              </div>
              <p>
                <i className='fa fa-map-marker'></i> Nov 2, 2022/ SGM Stadium
              </p>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <div className='flex-div'>
                <h6>
                  Italy FC. <Image src={Batch1} alt='Batch' />
                </h6>
                <h5>1 - 2</h5>
                <h6>
                  Italy FC. <Image src={Batch2} alt='Batch' />
                </h6>
              </div>
              <p>
                <i className='fa fa-map-marker'></i> Nov 2, 2022/ SGM Stadium
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

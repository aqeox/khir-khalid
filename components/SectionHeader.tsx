/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function SectionHeader() {

  const{ asPath } = useRouter();

  return (
    <div className={`relative h-20 z-20 ${asPath !== '/' ? 'visible' : 'hidden'}`}>
      <div className='fixed left-[10%] right-[10%] flex justify-between items-center text-[11px]  bg-white h-20'>
        <div>
          <div>
            <Link href='/works' className='text'>WORKS</Link>
          </div>
          <div>
            <Link href='/covers' className='text'>COVERS</Link>
          </div>
          <div>
            <Link href='/about' className='text'>ABOUT</Link>
          </div>
          <div>
            <Link href='/contact' className='text'>CONTACT</Link>
          </div>
        </div>
        <div>
          <div>
            <Link href={'/home'}>
              <img alt='logo' src='img/KHIRkhalid.svg' className=' w-[130px] sm:w-[210px] mt-10'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
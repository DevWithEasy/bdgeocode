import React from 'react';
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='w-full md:w-4/12 p-2 md:pt-4 bg-white/25 md:bg-transparent mb-2 md:mb-0 rounded-md md:rounded-none'>
            <p>BD API is a Free RestAPI service. Developed by  <Link className='text-blue-500 font-bold' href='https://facebook.com/robiulawal688'>Md Robiul Awal</Link>.Divisions, Districts, Upazilla, Thana, Post Office, Post Code etc of Bangladesh are available in Bangla and English within endpoints.</p>
        </div>
    );
};

export default Hero;
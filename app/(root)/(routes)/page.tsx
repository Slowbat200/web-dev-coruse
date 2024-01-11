'use client';

import { ArrowDown, BookOpenText } from 'lucide-react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io5';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import Features from './components/Features';
//import Footer from './components/Footer';

const RootPage = () => {
  const handleScroll = () => {
    // Find the next section by its ID or class
    const nextSection = document.getElementById('next-section');

    // Scroll to the next section if it exists
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className='w-full h-full'>
      <div className='container mx-auto px-4 md:px-0 py-16 md:py-24 lg:py-32 xl:py-36'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20'>
          <div className='md:col-span-1'>
            <div className='flex flex-row items-center md:items-start md:text-left md:w-full md:max-w-md md:mx-auto md:mb-16 md:order-1'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-none md:leading-none lg:leading-none pl-5'>
                Web development Course
              </h1>
            </div>
          </div>
          <div className='flex flex-row gap-x-5'>
            <BookOpenText
              size={60}
              color='#0f0'
              strokeWidth={1.75}
              className='hover:scale-110 transition '
            />
            <AiFillHtml5
              className='text-orange-600 hover:scale-110 transition'
              size={60}
            />
            <IoLogoCss3
              className='text-blue-500 hover:scale-110 transition'
              size={60}
            />
            <div className='relative bottom-12 right-6 hover:scale-110 transition'>
              <JavascriptOutlinedIcon
                className='text-yellow-500'
                sx={{ fontSize: 150 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-[5em] sm:mt-0'>
        <button
          onClick={handleScroll}
          className='border-2 border-[#6528F7] rounded-full hover:scale-125 p-[6px] hover:border-0 transition-all'
        >
          <ArrowDown
            size={30}
            className='text-white hover:scale-125 transition'
          />
        </button>
      </div>
      <div className='mt-[12em]'>
        <Features />
      </div>
      {/*<div className='mt-[5em]'><Footer /></div>*/}
    </section>
  );
};

export default RootPage;

'use client';

import Backend from "./components/Backend";
import Dev from "./components/Dev";
import Frontend from "./components/Frontend";
import '@/app/globals.css';
import Fullstack from "./components/Fullstack";


const Theory = () => {
  return (
    //Introducing into Theory page
    <div className='w-full h-full container'>
      <div className='flex flex-col items-center justify-start w-[80%] md:w-1/2 mx-auto mt-20 mb-10'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl whitespace-wrap md:whitespace-nowrap'>Hello <span className="font-bold text-future_gradient">user</span> welcome on Theory page</h1>
        <h2 className='text-3xl mt-5'>What you will find here?</h2>
      </div>
      <div className='grid gap-6 p-5 place-items-center bg-[#525CEB] rounded-lg shadow-md sm:shadow-lg'>
        <ol className='list-decimal text-white font-bold text-left pl-5 pr-5 pt-5 pb-5'>
          <li>
            <p className='text-muted-foreground'>What is <span className="text-white">web development</span>.</p>
          </li>
          <li>
            <p className='text-muted-foreground'>
              Differences between <span className='text-white'>Front-end</span> and <span className='text-white'>Backend</span>.
            </p>
          </li>
          <li>
            <p className='text-muted-foreground'>
              Which <span className='text-white'>protocols</span> are using for communication between user and
              server.
            </p>
          </li>
          <li>
            <p className='text-muted-foreground'>
              Which <span className="text-white">IDE</span> is great to use for creating websites and much more.
            </p>
          </li>
        </ol>
      </div>
      <div className="mt-20">
        <Dev />
      </div>
      <div className="mt-10">
        <Frontend />
      </div>
      <div className="mt-10">
        <Backend />
      </div>
      <div className="mt-10">
        <Fullstack />
      </div>
    </div>
  );
};

export default Theory;

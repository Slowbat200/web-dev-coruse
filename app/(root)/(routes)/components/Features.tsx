import { ArrowDown, BookOpenText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io5';
import JavascriptOutlined from '@mui/icons-material/JavascriptOutlined';

const Features = () => {
  return (
    <section
      id='next-section'
      className='flex flex-grow h-full pb-5 px-0 sm:px-5 '
    >
      <div className='flex flex-col sm:flex-row justify-center items-center space-x-5 space-y-5'>
        <div className='flex flex-col pl-5 gap-y-5 ml-[2em]'>
          <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
            {' '}
            Here you will find:
          </h1>
          <p className='px-2 text-lg leading-7 [&:not(:first-child)]:mt-6 '>
            Theory about what is web development and how to create simple or
            modern websites. How to create websites yourself or using websites
            builders. How does the website work, what languages are used here
            and what frameworks are associated with languages.
          </p>
        </div>
        <Separator
          orientation='vertical'
          className='hidden sm:flex relative left-[2em]'
        />
        <Separator orientation='horizontal' className='flex sm:hidden' />
        <div className='flex flex-col gap-y-5 pr-0 sm:pr-[3em]'>
          {/** Creating box with introducing into Theory */}
          <div className='flex gap-x-5 flex-row px-2 ml-0 sm:ml-[5em] py-3 w-[90%]'>
            <BookOpenText size={80} className='text-[#0f0]' />
            <p className='text-muted-foreground leading-7 [&:not(:first-child)]:mt-6'>
              What is Front-end and Backend, protocols for communication with
              web, development environment for developers and much more.
            </p>
          </div>

          {/** Creating box with introducing into HTML */}
          <Separator
            orientation='horizontal'
            className='relative left-[5em] sm:left-[10em] w-[50%]'
          />
          <div className='flex gap-x-5 flex-row px-2 ml-0 sm:ml-[5em] py-3 w-[90%]'>
            <AiFillHtml5 size={80} className='text-orange-600' />
            <p className='text-muted-foreground leading-7 [&:not(:first-child)]:mt-6'>
              What is HTML, types of tags, HTML history and so much examples and
              code samples.
            </p>
          </div>

          {/** Creating box with introducing into CSS */}
          <Separator
            orientation='horizontal'
            className='relative left-[5em] sm:left-[10em] w-[50%]'
          />
          <div className='flex gap-x-5 flex-row px-2 ml-0 sm:ml-[5em] py-3 w-[90%]'>
            <IoLogoCss3 size={80} className='text-blue-500' />
            <p className='text-muted-foreground leading-7 [&:not(:first-child)]:mt-6'>
              Why use Css, history of Css, information about preprocessor, Css
              usage in practice and many examples and code samples.
            </p>
          </div>

          {/** Creating box with introducing into JS */}
          <Separator
            orientation='horizontal'
            className='relative left-[5em] sm:left-[10em] w-[50%]'
          />
          <div className='flex gap-x-5 flex-row px-2 ml-0 sm:ml-[5em] py-3 w-[90%]'>
            <JavascriptOutlined
              sx={{ fontSize: 60 }}
              className='text-yellow-500'
            />
            <p className='text-muted-foreground leading-7 [&:not(:first-child)]:mt-6'>
              How JavaScript works, what frameworks have been built and many
              more examples and code samples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

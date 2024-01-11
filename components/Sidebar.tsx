'use client';

import { cn } from '@/lib/utils';
import { BookOpenText, Home } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { IoLogoCss3 } from 'react-icons/io5';
import { AiFillHtml5 } from 'react-icons/ai';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';


export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter()
  
  // Creating navigation function for our routes
  const onNavigate = (url: string) => {
    return router.push(url)
  }

  const routes = [
    {
      icon: Home,
      href: '/',
      label: 'Home',
    },
    {
      icon: BookOpenText,
      href: '/theory',
      label: 'Theory',
    },
    {
      icon: AiFillHtml5,
      href: '/html',
      label: 'HTML',
    },
    {
      icon: IoLogoCss3,
      href: '/css',
      label: 'CSS',
    },
    {
      icon: JavascriptOutlinedIcon,
      href: '/javascript',
      label: 'Javascript',
    },
  ];


  return (
    <div className='space-y-4 flex flex-col h-full text-primary bg-secondary rounded-e-lg'>
      <div className='p-3 flex flex-1 justify-center'>
        <div className='space-y-2'>
            {/** Displaying our routes function */}
          {routes.map((route) => (
            <div
            onClick={() => onNavigate(route.href)}
              className={cn(
                `text-muted-foreground text-xs 
                group flex p-2 w-full justify-start 
                font-medium cursor-pointer hover:text-primary 
                hover:bg-primary/10 rounded-lg transition`,
                pathname === route.href && 'bg-primary/10 text-primary'
              )}
            >
              <div className='flex flex-col gap-y-2 items-center flex-1'>
                <route.icon className='h-5 w-5' />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

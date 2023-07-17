'use client'
import { useEffect } from 'react';

//import Image from 'next/image'
//import Header from '../components/Header'
//import Sidebar from '../components/Sidebar';
//import Link from 'next/link';
//import { useState, useEffect } from 'react';
//import { useRouter } from 'next/navigation';

//
//export default function Home() {
//  
//
//  const router = useRouter();
//  router.push('/MobileRedirect');
//
//  return (
//    <div className="min-h-screen bg-backgroundBlack bg-[url('/grid.svg')] flex flex-col">
//      <Header />
//      <div className="flex-1 flex">
//
//        <Sidebar />
//        <div className="flex-1">
//          {/* Your main content */}
//        </div>
//      </div>
//    </div>
//  );
//}

// @react-hook/server-components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PageContent from '../components/PageContent';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000){
        router.push('/MobileRedirect');
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-backgroundBlack bg-[url('/grid.svg')] flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1">
          {/* Your main content */}
          <PageContent></PageContent>
        </div>
      </div>
    </div>
  );
}




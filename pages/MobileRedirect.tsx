'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import 'tailwindcss/tailwind.css';

const MobileRedirect: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        router.push('/');
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-backgroundBlack bg-[url('/grid.svg')] flex flex-col items-center justify-center">
      <div className="bg-black rounded-xl p-12 m-12 border border-detailGrey">
        <h1 className="text-xl text-white text-center">
        Please resize your screen to properly view the content.
        </h1>
      </div>
    </div>
   
  ); 
};

export default MobileRedirect;


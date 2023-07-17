import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header: React.FC = () => {
  return (
    <header className="bg-accentBlack text-white">
      <div className="p-4 flex items-center justify-between">
        <Image src="/pipedreamlogo.png" alt="Pipedream" width={150} height={50}/>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/MobileRedirect" className="px-3 py-2 rounded-lg border border-accentBlack hover:border-white border-detailGrey border-t-1">Home</a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 rounded-lg border border-accentBlack hover:border-white border-detailGrey border-t-1">About</a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 rounded-lg border border-accentBlack hover:border-white border-detailGrey border-t-1">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="border-detailGrey border-t-1" />
    </header>
  );
};

export default Header;

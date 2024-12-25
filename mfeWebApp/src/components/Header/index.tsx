import React from 'react';

function Header() {
  return (
    <div className="overflow-hidden bg-custom-gray py-5 px-2.5">
      <a href="#default" className="float-left text-black text-center p-3 text-none text-lg leading-6 rounded-md text-2xl font-bold">
        Header Component
      </a>
      <div className="float-right">
        <a className="float-left text-black text-center p-3 text-none text-lg leading-6 rounded-md" href="#home">
          Home
        </a>
        <a href="#contact" className='float-left text-black text-center p-3 text-none text-lg leading-6 rounded-md'>Contact</a>
        <a href="#about" className='float-left text-black text-center p-3 text-none text-lg leading-6 rounded-md'>About</a>
      </div>
    </div>
  );
}

export default Header;
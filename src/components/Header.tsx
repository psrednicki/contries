import React from 'react';

const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
      <header className="text-gray-800 py-3 px-12 w-full flex shadow-md justify-between items-center">
          <h1>{title}</h1>
          <div className='self-end'>
            <button className="bg-sky-500 hover:bg-sky-700 active:bg-sky-600 px-5 py-2 leading-5 rounded-full font-semibold text-white justify-items-center text-sm">
                MODE
            </button>
          </div>
      </header>
    );
  }
  
export default Header;
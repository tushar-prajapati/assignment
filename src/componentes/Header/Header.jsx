import React from 'react';

const Header = ({ studentName }) => {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  return (
    <div className="flex justify-between items-center mb-6 px-4 border-b py-4 border-gray-300">
      <h1 className="text-2xl text-gray-700 font-semibold">Welcome, {studentName}</h1>
      <p className="text-gray-500">{today}</p>
    </div>
  );
};

export default Header;

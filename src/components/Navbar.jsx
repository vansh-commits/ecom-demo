import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signin');
  };
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-500">ShoeStore</Link>
      <div className="flex items-center gap-4">
        <span className="text-xl">🛒</span>
        <button onClick={logout} className="text-red-500">🔓 Logout</button>
      </div>
    </nav>
  );
};
export default Navbar;
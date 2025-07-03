import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="bg-blue-700 text-white w-60 min-h-screen flex flex-col justify-between fixed top-0 left-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">📝 Webalar To-Do</h1>
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="hover:text-yellow-300">🏠 Home</Link>
          {!isLoggedIn && (
            <>
              <Link to="/login" className="hover:text-yellow-300">🔑 Login</Link>
              <Link to="/register" className="hover:text-yellow-300">🧾 Register</Link>
            </>
          )}
          {isLoggedIn && (
            <button onClick={handleLogout} className="text-left hover:text-yellow-300">
              🚪 Logout
            </button>
          )}
        </nav>
      </div>
      <div className="p-4 text-sm text-center text-gray-300">
        © 2025 Vishwadeep
      </div>
    </div>
  );
};

export default Navbar;

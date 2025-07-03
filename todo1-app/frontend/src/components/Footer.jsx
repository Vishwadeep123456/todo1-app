import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3 mt-10">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} Vishwadeep Todo App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

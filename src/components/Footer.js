import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-4 bg-dark text-white">
      <p>© {new Date().getFullYear()} Dee's Portfolio. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

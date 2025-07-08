import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      className="text-white-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;

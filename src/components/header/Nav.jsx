import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLinks from '../../data/headerLinks';

export default function Nav() {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex items-center space-x-4">
        {headerLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              title={link.title}
              className={`${
                location.pathname === link.href ? 'text-primary font-semibold' : 'text-white'
              } rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-primary`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../icons/social/FacebookIcon';
import InstagramIcon from '../../icons/social/InstagramIcon';
import TwitterIcon from '../../icons/social/TwitterIcon';
import LinkedInIcon from '../../icons/social/LinkedInIcon';
import PinterestIcon from '../../icons/social/PinterestIcon';
import * as ROUTES from '../../constants/routes';

const socialLinks = [
  {
    id: 1,
    title: 'Facebook',
    href: 'https://facebook.com/moviezninja',
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    title: 'Twitter',
    href: 'https://twitter.com/MoviezNinja',
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    title: 'Instagram',
    href: 'https://instagram.com/MoviezNinja',
    icon: <InstagramIcon />,
  },
  {
    id: 4,
    title: 'LinkedIn',
    href: 'https://linkedin.com/company/moviezninja',
    icon: <LinkedInIcon />,
  },
  {
    id: 5,
    title: 'Pinterest',
    href: 'https://pinterest.com/moviezninja',
    icon: <PinterestIcon />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 border-t border-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link
            to={ROUTES.HOME}
            title="MoviezNinja"
            className="text-2xl mb-5 sm:mb-0 text-white cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
          >
            <span>MoviezNinja</span>
          </Link>

          <div className="flex space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                className="w-10 h-10 flex text-white items-center justify-center bg-lightgray rounded-full hover:bg-customgray-300 hover:text-primary"
                href={link.href}
                title={link.title}
                target="_blank"
                rel="noreferrer"
              >
                <span>{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

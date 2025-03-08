import React from 'react';
import { SocialLink } from './SocialLink';
import { socialLinks } from '../constants/socialLinks';

export const SocialLinks: React.FC = () => {
  return (
    <nav aria-label="social links">
      <ul className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <SocialLink key={link.href} {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
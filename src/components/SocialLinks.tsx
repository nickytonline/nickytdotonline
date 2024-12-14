import React from 'react';
import { SocialLink } from './SocialLink';
import { socialLinks } from '../constants/socialLinks';

export const SocialLinks: React.FC = () => {
  return (
    <nav aria-label="social links">
      <ul className="grid grid-cols-4 md:grid-cols-8 justify-center gap-4">
        {socialLinks.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </ul>
    </nav>
  );
};
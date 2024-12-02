import React from 'react';
import { SocialLink } from './SocialLink';
import { socialLinks } from '../constants/socialLinks';

export const SocialLinks: React.FC = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </ul>
  );
};
import React from 'react';
import { siDiscord } from 'simple-icons';

export const DiscordIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    className={className}
  >
    <path 
      fill="currentColor" 
      d={siDiscord.path}
    />
  </svg>
);
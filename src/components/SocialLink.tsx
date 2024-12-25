import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon | { size?: number; className?: string };
  label: string;
  colorClass: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  label,
  colorClass,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center transition-all duration-300 hover:scale-110
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e1e26]
        focus-visible:ring-offset-2 group"
      aria-label={label}
    >
      <Icon
        size={32}
        className={`transition-colors duration-300 ${colorClass}`}
      />
    </a>
  );
};
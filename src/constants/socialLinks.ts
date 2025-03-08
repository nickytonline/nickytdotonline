import { Github, Linkedin, Instagram, Youtube, Twitch } from 'lucide-react';
import { BlueskyIcon } from '../components/BlueskyIcon';
import { XIcon } from '../components/XIcon';
import type { LucideIcon } from 'lucide-react';
import { MastodonIcon } from '../components/icons/MastodonIcon';
import { TikTokIcon } from '../components/icons/TikTokIcon';

interface SocialLink {
  href: string;
  icon: LucideIcon | React.FC<{ size?: number; className?: string }>;
  label: string;
  colorClass: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: 'https://bsky.app/profile/nickyt.online',
    icon: BlueskyIcon,
    label: 'Bluesky',
    colorClass: 'group-hover:text-bluesky group-focus-visible:text-bluesky'
  },
  {
    href: 'https://youtube.com/@nickytonline',
    icon: Youtube,
    label: 'YouTube',
    colorClass: 'group-hover:text-youtube group-focus-visible:text-youtube'
  },
  {
    href: 'https://twitch.tv/nickytonline',
    icon: Twitch,
    label: 'Twitch',
    colorClass: 'group-hover:text-twitch group-focus-visible:text-twitch'
  },
  {
    href: 'https://github.com/nickytonline',
    icon: Github,
    label: 'GitHub',
    colorClass: 'group-hover:text-github-hover group-focus-visible:text-github-hover'
  },
  {
    href: 'https://www.linkedin.com/in/nickytonline',
    icon: Linkedin,
    label: 'LinkedIn',
    colorClass: 'group-hover:text-linkedin group-focus-visible:text-linkedin'
  },
  {
    href: 'https://instagram.com/nickytonline',
    icon: Instagram,
    label: 'Instagram',
    colorClass: 'group-hover:text-instagram group-focus-visible:text-instagram'
  },
  {
    href: 'https://x.com/nickytonline',
    icon: XIcon,
    label: 'X (formerly Twitter)',
    colorClass: 'group-hover:text-x group-focus-visible:text-x'
  },
  {
    href: 'https://toot.cafe/@nickytonline',
    icon: MastodonIcon,
    label: 'Mastodon',
    colorClass: 'group-hover:text-mastodon group-focus-visible:text-mastodon'
  },
  {
    href: 'https://tiktok.com/@nickytonline',
    icon: TikTokIcon,
    label: 'TikTok',
    colorClass: 'group-hover:text-tiktok group-focus-visible:text-tiktok'
  }
];
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'github': '#171515',
        'github-hover': '#2188FF',
        'linkedin': '#0A66C2',
        'instagram': '#E4405F',
        'youtube': '#FF0000',
        'twitch': '#9146FF',
        'discord': '#5865F2',
        'bluesky': '#0560FF',
        'x': '#1DA1F2',
        'mastodon': '#635BFF',
        'tiktok': '#00F2EA',
      },
    }
  },
  plugins: []
};
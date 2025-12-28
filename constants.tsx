
import { SpeakingEngagement, BlogPost } from './types';

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = Array.from({ length: 11 }, (_, i) => ({
  id: `talk-${i}`,
  thumbnail: `https://picsum.photos/seed/talk${i}/400/225`,
  title: `Talk Title ${i + 1}`
}));

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    image: 'https://picsum.photos/seed/graphql-error/600/400',
    title: '"200 OK! ERROR HANDLING IN GRAPHQL"',
    link: '#'
  },
  {
    id: 'post-2',
    image: 'https://picsum.photos/seed/keyboard/600/400',
    title: '"BUILDING MY FIRST KEYBOARD (AND YOU CAN TOO)"',
    link: '#'
  },
  {
    id: 'post-3',
    image: 'https://picsum.photos/seed/medium-design/600/400',
    title: '"GRAPHQL SERVER DESIGN @ MEDIUM"',
    link: '#'
  },
  {
    id: 'post-4',
    image: 'https://picsum.photos/seed/medium-talks/600/400',
    title: '"GRAPHQL TECH TALKS @ MEDIUM"',
    link: '#'
  },
  {
    id: 'post-5',
    image: 'https://picsum.photos/seed/medium-migration/600/400',
    title: '"2 FAST 2 FURIOUS: MIGRATING MEDIUM\'S CODEBASE WITHOUT SLOWING DOWN"',
    link: '#'
  },
  {
    id: 'post-6',
    image: 'https://picsum.photos/seed/dungeon-master/600/400',
    title: '"A DUNGEON MASTER\'S GUIDE (FROM A PLAYER\'S PERSPECTIVE)"',
    link: '#'
  }
];

export const COLORS = {
  pink: '#FF5E8E',
  green: '#22C55E',
  blue: '#4B56D2',
  lightGray: '#E5E7EB'
};

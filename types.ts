
export interface SpeakingEngagement {
  id: string;
  thumbnail: string;
  title: string;
}

export interface BlogPost {
  id: string;
  image: string;
  title: string;
  link: string;
}

export enum SectionType {
  Speaking = 'Speaking',
  Posts = 'Posts'
}

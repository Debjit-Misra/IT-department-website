export interface NavItem {
  label: string;
  path: string;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  specialization: string;
}

export interface ResearchProject {
  id: number;
  title: string;
  domain: string;
  description: string;
  status: 'Ongoing' | 'Completed';
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  size: 'small' | 'medium' | 'large';
}

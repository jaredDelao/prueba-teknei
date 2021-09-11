export interface Login {
  email: string;
  password: string;
}

export interface User {
  id?: string;
  name: string;
  photo: string;
}

export type TypePhoto = 'posts' | 'user';

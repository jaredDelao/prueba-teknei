import firebase from 'firebase/app';

export interface Post {
  id?: string;
  idUser?: string;
  photo: string;
  name: string;
  comments: Comment[] | firebase.firestore.FieldValue;
  createdAt: string;
}

export interface Comment {
  id?: string;
  user: string;
  description: string;
  createdAt: Date | string;
}

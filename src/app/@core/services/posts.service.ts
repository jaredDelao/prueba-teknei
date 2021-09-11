import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { map, switchMap, takeLast } from 'rxjs/operators';
import { TypePhoto, User } from '../interfaces/login';
import { Post } from '../interfaces/posts';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsCollection: AngularFirestoreCollection<Post>;
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private firestore: AngularFirestore, private _storage: AngularFireStorage) {
    this.postsCollection = this.firestore.collection('posts');
    this.userCollection = this.firestore.collection('users');
  }

  getUsers(): Observable<User[]> {
    return this.userCollection.get().pipe(
      map((snap) =>
        snap.docs.map((user) => {
          if (user.exists)
            return {
              id: user.id,
              ...(user.data() as User),
            };
        })
      )
    );
  }

  getUser(): Observable<User> {
    return this.userCollection
      .doc(this.uid)
      .snapshotChanges()
      .pipe(
        map((snaps) => {
          return {
            id: snaps.payload.id,
            ...snaps.payload.data(),
          };
        })
      );
  }

  savePhotoUser(photo: string): Promise<void> {
    return this.userCollection.doc(this.uid).update({
      photo,
    });
  }

  getAllPosts(): Observable<Post[]> {
    // return this.postsCollection.snapshotChanges().pipe(
    //   map((snaps) =>
    //     snaps.map((snap) => {
    //       return {
    //         id: snap.payload.doc.id,
    //         ...snap.payload.doc.data(),
    //       };
    //     })
    //   )
    // );
    return this.postsCollection.get().pipe(
      map((snaps) =>
        snaps.docs.map((snap) => {
          return {
            id: snap.id,
            ...snap.data(),
          };
        })
      )
    );
  }

  getPostsByUser(): Promise<QuerySnapshot<Post>> {
    return this.postsCollection.ref.where('idUser', '==', this.uid).get();
  }

  addComment(idPost: string, description: string): Promise<void> {
    return this.postsCollection.doc(idPost).update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        description,
        user: this.uid,
        createdAt: new Date().toISOString(),
      }),
    });
  }

  createPost(id: string, post: Post): Promise<void> {
    return this.postsCollection.doc(id).set({
      idUser: this.uid,
      ...post,
    });
  }

  uploadPhoto(id: string, file: File, type: TypePhoto): Observable<string> {
    const filePath = `${type}/${id}`;
    const ref = this._storage.ref(filePath);
    const task = this._storage.upload(filePath, file);
    return task.snapshotChanges().pipe(
      takeLast(1),
      switchMap(() => ref.getDownloadURL())
    );
  }

  deletePost(id: string): Promise<void> {
    return this.postsCollection.doc(id).delete();
  }

  get uid(): string {
    return localStorage.getItem('uid');
  }
}

import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Credentials, CredentialsService } from './credentials.service';
import { Login } from '@app/@core/interfaces/login';
import { switchMap } from 'rxjs/operators';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private angularFireAuth: AngularFireAuth) {}

  loginUser({ email, password }: Login): Observable<unknown> {
    return from(this.angularFireAuth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap((signIn) => {
        localStorage.setItem('uid', signIn.user.uid);
        return from(signIn.user.getIdToken());
      })
    );
  }

  logout(): Observable<boolean> {
    this.credentialsService.setCredentials();
    return of(true);
  }
}

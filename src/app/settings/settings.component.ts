import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { CredentialsService } from '@app/@core/services/credentials.service';
import { AuthenticationService } from '@app/@core/services/authentication.service';
import { PostsService } from '@app/@core/services/posts.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@app/@core/interfaces/login';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  filePhoto: File;
  loading: boolean;
  user: User;
  $unsubscribe = new Subject();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private platform: Platform,
    private postsService: PostsService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.userData();
  }

  ionViewDidLeave() {
    this.$unsubscribe.next(true);
    this.$unsubscribe.complete();
  }

  ngOnDestroy() {}

  private userData(): void {
    this.postsService
      .getUser()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe((user) => {
        this.user = user;
      });
  }

  setFilePhoto(e: Event): void {
    this.loading = true;
    this.filePhoto = (e.target as HTMLInputElement).files[0];
    const uid = localStorage.getItem('uid');
    this.postsService
      .uploadPhoto(uid, this.filePhoto, 'user')
      .pipe(
        takeUntil(this.$unsubscribe),
        switchMap((url) => this.postsService.savePhotoUser(url))
      )
      .subscribe({
        next: () => (this.loading = false),
        error: (error: HttpErrorResponse) => {
          alert('Ocurrió un error al guardar la foto' + error.status);
        },
      });
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }
}

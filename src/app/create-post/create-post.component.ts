import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { PostsService } from '@app/@core/services/posts.service';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit, OnDestroy {
  loading: boolean;
  filePhoto: File;
  $unsubscribe = new Subject();
  controlName = new FormControl(null, Validators.required);

  constructor(private postsService: PostsService, private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.$unsubscribe.next(true);
    this.$unsubscribe.complete();
  }

  setFilePhoto(e: Event): void {
    this.filePhoto = (e.target as HTMLInputElement).files[0];
  }

  save(): void {
    this.loading = true;
    const id = this.firestore.createId();
    this.postsService
      .uploadPhoto(id, this.filePhoto, 'posts')
      .pipe(
        takeUntil(this.$unsubscribe),
        switchMap((photo) =>
          this.postsService.createPost(id, {
            photo,
            name: this.controlName.value,
            comments: [],
            createdAt: new Date().toISOString(),
          })
        )
      )
      .subscribe({
        next: () => {
          alert('Post creado correctamente');
          this.loading = false;
          this.filePhoto = null;
          this.controlName.reset();
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
          alert('Ocurrió un error al agregar el post');
        },
      });
  }
}

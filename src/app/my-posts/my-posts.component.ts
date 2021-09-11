import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '@app/@core/interfaces/posts';
import { PostsService } from '@app/@core/services/posts.service';
import { Comment } from '@app/@core/interfaces/posts';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from '@app/@core/interfaces/login';
import { FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
})
export class MyPostsComponent implements OnInit {
  loader = true;
  skeletonCount = Array(10);
  form: FormGroup;
  $unsubscribe = new Subject<boolean>();
  posts: Post[] = [];
  users: User[] = [];
  empty: boolean;

  constructor(private postsService: PostsService, public alertController: AlertController) {}

  ngOnInit(): void {}

  ionViewWillEnter() {
    this.getUsers();
    this.getPosts();
  }

  ionViewDidLeave() {
    this.$unsubscribe.next(true);
    this.$unsubscribe.complete();
  }

  async deletePost(id: string) {
    await this.presentAlertConfirm(id);
  }

  private async presentAlertConfirm(id: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Seguro que deseas eliminar el post?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return;
          },
        },
        {
          text: 'Aceptar',
          handler: async () => {
            await this.postsService.deletePost(id);
            this.getPosts();
          },
        },
      ],
    });

    await alert.present();
  }

  private getUsers(): void {
    this.postsService
      .getUsers()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe((users) => {
        this.users = users;
      });
  }

  private async getPosts(): Promise<void> {
    this.posts = [];
    const posts = await this.postsService.getPostsByUser();
    if (posts.empty) this.empty = true;
    posts.forEach((data) => {
      this.posts.push({
        id: data.id,
        ...(data.data() as Post),
      });
    });
  }
}

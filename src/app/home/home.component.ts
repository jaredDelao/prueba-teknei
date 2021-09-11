import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Post } from '@app/@core/interfaces/posts';
import { PostsService } from '@app/@core/services/posts.service';
import { Comment } from '@app/@core/interfaces/posts';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from '@app/@core/interfaces/login';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  loader = true;
  skeletonCount = Array(10);
  form: FormGroup;
  controlSearch = new FormControl(null);
  $unsubscribe = new Subject<boolean>();
  posts: Post[] = [];
  postsFiltered: Post[] = [];
  users: User[] = [];

  constructor(private postsService: PostsService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  ionViewDidEnter() {
    this.formInit();
    this.getUsers();
    this.getPosts();
  }

  ionViewDidLeave() {
    this.users = [];
    this.posts = [];
    this.$unsubscribe.next(true);
    this.$unsubscribe.complete();
  }

  ngAfterViewInit(): void {
    this.controlSearch.valueChanges.subscribe((search: string) => {
      if (!search) return (this.postsFiltered = this.posts);
      this.postsFiltered = this.posts.filter((x) => x.name.includes(search));
    });
  }

  async addComment(idx: number, idPost: string): Promise<void> {
    try {
      const description = this.form.get(idPost).value;
      await this.postsService.addComment(idPost, description);
      (this.posts[idx].comments as Comment[]).push({
        description,
        user: this.postsService.uid,
        createdAt: new Date().toISOString(),
      });
      this.form.get(idPost).reset();
    } catch (e) {
      alert('Ocurrió un error al agregar el comentario');
    }
  }

  private formInit() {
    this.form = this.fb.group({});
  }

  private getUsers(): void {
    this.postsService
      .getUsers()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe((users) => {
        this.users = users;
      });
  }

  private getPosts(): void {
    this.postsService
      .getAllPosts()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe((posts) => {
        this.posts = posts.reduce((acc: Post[], post) => {
          acc.push({
            ...post,
            comments: (post.comments as Comment[]).sort(
              (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            ),
          });
          return acc;
        }, []);
        this.posts = this.posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.postsFiltered = this.posts;
        this.formInit();
        this.addControls();
      });
  }

  private addControls(): void {
    this.posts.map((post) => {
      this.form.addControl(post.id, new FormControl(null, Validators.required));
    });
  }
}

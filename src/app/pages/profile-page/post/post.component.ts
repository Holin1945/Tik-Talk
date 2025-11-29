import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AvatarCirlceComponent } from '../../../common-ui/avatar-cirlce/avatar-cirlce.component';
import { SvgIconComponent } from '../../../common-ui/svg-icon/svg-icon.component';
import { Post, PostComment } from '../../../data/interfaces/post.interface';
import { TimeAgoPipe } from "../../../helpers/pipes/time-ago.pipe";
import { PostInputComponent } from '../post-input/post-input.component';
import { PostService } from './../../../data/services/post.service';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-post',
  imports: [
    AvatarCirlceComponent,
    CommonModule,
    SvgIconComponent,
    PostInputComponent,
    CommentComponent,
    TimeAgoPipe
],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  post = input<Post>();
  comments = signal<PostComment[]>([]);
  postService = inject(PostService);

  async ngOnInit() {
    this.comments.set(this.post()!.comments);
  }

  async onCreated() {
    const comments = await firstValueFrom(
      this.postService.getCommentsByPostId(this.post()!.id)
    );
    this.comments.set(comments);
  }
}

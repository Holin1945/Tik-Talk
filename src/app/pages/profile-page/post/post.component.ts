import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AvatarCircleComponent } from '../../../common-ui/avatar-cirlce/avatar-cirlce.component';
import { SvgIconComponent } from '../../../common-ui/svg-icon/svg-icon.component';
import { Post, PostComment } from '../../../data/interfaces/post.interface';
import { ProfileService } from '../../../data/services/profile.service';
import { TimeAgoPipe } from '../../../helpers/pipes/time-ago.pipe';
import { PostInputComponent } from '../post-input/post-input.component';
import { PostService } from './../../../data/services/post.service';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-post',
  imports: [
    AvatarCircleComponent,
    CommonModule,
    SvgIconComponent,
    PostInputComponent,
    CommentComponent,
    TimeAgoPipe,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  post = input<Post>();
  postId = input<number>(0);
  comments = signal<PostComment[]>([]);
  postService = inject(PostService);
  profile = inject(ProfileService).me;

  async ngOnInit() {
    this.comments.set(this.post()!.comments);
  }

  onCreated(commentText: string) {
    firstValueFrom(
      this.postService.createComment({
        text: commentText,
        authorId: this.profile()!.id,
        postId: this.post()!.id,
      })
    )
      .then(async () => {
        const comments = await firstValueFrom(
          this.postService.getCommentsByPostId(this.post()!.id)
        );
        this.comments.set(comments);
      })
      .catch((error) => console.error('Ошибка создания коммента', error));
    return;
  }
}

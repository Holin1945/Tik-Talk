import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AvatarCirlceComponent } from '../../../../common-ui/avatar-cirlce/avatar-cirlce.component';
import { PostComment } from '../../../../data/interfaces/post.interface';

@Component({
  selector: 'app-comment',
  imports: [AvatarCirlceComponent, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  comment = input<PostComment>();
}

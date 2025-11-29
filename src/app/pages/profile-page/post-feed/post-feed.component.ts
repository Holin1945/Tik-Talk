import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';
import { auditTime, debounceTime, firstValueFrom, fromEvent } from 'rxjs';
import { PostService } from '../../../data/services/post.service';
import { PostInputComponent } from '../post-input/post-input.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-feed',
  imports: [PostInputComponent, PostComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss',
})
export class PostFeedComponent {
  postService = inject(PostService);
  feed = this.postService.posts;
  r2 = inject(Renderer2);
  hostElement = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('window:resize')
  onWindowResize() {
    this.resizeFeed();
  }

  constructor() {
    firstValueFrom(this.postService.fetchPosts());
  }

  ngAfterViewInit(): void {
    this.resizeFeed();

    fromEvent(window, 'resize')
      .pipe(auditTime(500))
      .subscribe(() => {
        this.resizeFeed();
        console.log('Resize processed');
      });
  }

  resizeFeed(): void {
    const { top } = this.hostElement.nativeElement.getBoundingClientRect();
    const height = window.innerHeight - top - 24 - 24;
    this.r2.setStyle(this.hostElement.nativeElement, 'height', `${height}px`);
  }
}

import { Component, input } from '@angular/core';
import { ImgUrlPipe } from "../../helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-avatar-cirlce',
  imports: [ImgUrlPipe],
  templateUrl: './avatar-cirlce.component.html',
  styleUrl: './avatar-cirlce.component.scss',
})
export class AvatarCirlceComponent {
  avatarUrl = input<string | null>()
}

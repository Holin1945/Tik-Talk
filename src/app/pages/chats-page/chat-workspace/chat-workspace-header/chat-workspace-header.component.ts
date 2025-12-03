import { Component, input } from '@angular/core';
import { Profile } from '../../../../data/interfaces/profile.interface';
import { AvatarCircleComponent } from "../../../../common-ui/avatar-cirlce/avatar-cirlce.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-workspace-header',
  imports: [AvatarCircleComponent, CommonModule],
  templateUrl: './chat-workspace-header.component.html',
  styleUrl: './chat-workspace-header.component.scss',
})
export class ChatWorkspaceHeaderComponent {
  profile = input.required<Profile>()
}

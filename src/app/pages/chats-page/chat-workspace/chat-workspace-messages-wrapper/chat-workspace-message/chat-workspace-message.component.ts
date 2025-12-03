import { Component, HostBinding, input } from '@angular/core';
import { Message } from '../../../../../data/interfaces/chats.interface';
import { CommonModule } from '@angular/common';
import { AvatarCircleComponent } from '../../../../../common-ui/avatar-cirlce/avatar-cirlce.component';

@Component({
  selector: 'app-chat-workspace-message',
  imports: [CommonModule, AvatarCircleComponent],
  templateUrl: './chat-workspace-message.component.html',
  styleUrl: './chat-workspace-message.component.scss',
})
export class ChatWorkspaceMessageComponent {
  message = input.required<Message>();

  @HostBinding('class.is-mine')
  get isMine() {
    return this.message().isMine;
  }
}

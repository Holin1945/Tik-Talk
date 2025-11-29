import { Component, input } from '@angular/core';
import { AvatarCirlceComponent } from '../avatar-cirlce/avatar-cirlce.component';
import { Profile } from './../../data/interfaces/profile.interface';

@Component({
  selector: 'app-profile-header',
  imports: [AvatarCirlceComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  profile = input<Profile>();
}

import { Component, inject, input } from '@angular/core';
import { Profile } from './../../data/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';
import { Router } from '@angular/router';
import { AvatarCircleComponent } from '../avatar-cirlce/avatar-cirlce.component';

@Component({
  selector: 'app-profile-header',
  imports: [AvatarCircleComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  profile = input<Profile | null>();
  profileService = inject(ProfileService);

  private router = inject(Router);

  get isSettings(): boolean {
    return this.router.url.startsWith('/settings');
  }
}

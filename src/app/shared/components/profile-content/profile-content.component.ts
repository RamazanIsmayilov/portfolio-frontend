import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-content.component.html',
  styleUrl: './profile-content.component.scss'
})
export class ProfileContentComponent {
  socialItems = [
    { icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/ramazan-ismay%C4%B1lov/' },
    { icon: 'fa-brands fa-github', link: 'https://github.com/RamazanIsmayilov' },
    { icon: 'fa-brands fa-instagram', link: 'https://www.instagram.com/r.ismayilof' },
    { icon: 'fa-brands fa-facebook-f', link: 'https://www.facebook.com/profile.php?id=61562651615021&mibextid=ZbWKwL' },
  ]
}

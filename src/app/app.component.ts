import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/layouts/footer/footer.component";
import { SidebarComponent } from "./core/layouts/sidebar/sidebar.component";
import { ProfileContentComponent } from "./shared/components/profile-content/profile-content.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, SidebarComponent, ProfileContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // backgroundVideoSrc: string = '../assets/videos/background.mp4'

  // constructor() {
  //   console.log(this.backgroundVideoSrc);
  // }
}

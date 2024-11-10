import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./core/layouts/sidebar/sidebar.component";
import { ProfileContentComponent } from "./shared/components/profile-content/profile-content.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ProfileContentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showSidebarAndProfileContent: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url
      this.showSidebarAndProfileContent = !['/login', '/register'].includes(currentUrl);
    })
  } 
}

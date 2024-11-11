import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { SidebarComponent } from "./core/layouts/sidebar/sidebar.component";
import { ProfileContentComponent } from "./shared/components/profile-content/profile-content.component";
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from "./core/layouts/admin-sidebar/admin-sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ProfileContentComponent, CommonModule, AdminSidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSidebarAndProfileContent: boolean = true;
  showBackgroundVideo: boolean = true;
  showAdminSidebar: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        this.showSidebarAndProfileContent = !(
          currentUrl === '/login' ||
          currentUrl === '/register' ||
          currentUrl.startsWith('/admin')
        );
        this.showBackgroundVideo = !currentUrl.startsWith('/admin');
        this.showAdminSidebar = currentUrl.startsWith('/admin');
      }
    });
  }
}

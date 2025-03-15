import { Component, inject } from '@angular/core';
import { LayoutService } from './service/layout.service';

@Component({
  selector: 'switch-layout',
  standalone: true,
  imports: [],
  templateUrl: './switch-layout.component.html',
  styleUrl: './switch-layout.component.scss',
})
export class SwitchLayoutComponent {
  layoutService = inject(LayoutService);

  toggleSidebar() {
    if (this.layoutService.sidebarVertical()) {
      this.layoutService.sidebarVertical.set(false);
    } else {
      this.layoutService.sidebarVertical.set(true);
    }
  }
}

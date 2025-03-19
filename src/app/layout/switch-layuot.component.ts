import { Component, ElementRef, inject } from '@angular/core';
import { LayoutService } from './service/layout.service';

@Component({
  selector: 'switch-layout',
  standalone: true,
  imports: [],
  templateUrl: './switch-layout.component.html',
})
export class SwitchLayoutComponent {
  layoutService = inject(LayoutService);
  
  constructor(public el: ElementRef) {}

  toggleSidebar() {
    if (this.layoutService.sidebarVertical()) {
      this.layoutService.sidebarVertical.set(false);
    } else {
      this.layoutService.sidebarVertical.set(true);
    }
  }
}

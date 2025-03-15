import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from './service/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './app-topbar.component.html',
})
export class AppTopbarComponent {
  @ViewChild('buttonToggle') buttonToggle!: any;

  constructor(private layoutService: LayoutService, public el: ElementRef) {}

  toggleSidebar() {
    if (this.isMobile()) {
      this.layoutService.sidebarMobileActive.update((value) => !value);
    } else {
      this.layoutService.sidebarActive.update((value) => !value);
    }
  }

  private isMobile(): boolean {
    return window.innerWidth < 992;
  }
}

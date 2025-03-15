import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  sidebarActive = signal<boolean>(true);
  sidebarMobileActive = signal<boolean>(false);
  sidebarVertical = signal<boolean>(true);

  isMobile(): boolean {
    return window.innerWidth < 992;
  }
}

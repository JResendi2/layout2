import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  sidebarActive = signal<boolean>(true);
  sidebarMobileActive = signal<boolean>(false);
  sidebarVertical = signal<boolean>(true);
  currentSection = signal<number>(0);

  isMobile(): boolean {
    return window.innerWidth < 992;
  }
}

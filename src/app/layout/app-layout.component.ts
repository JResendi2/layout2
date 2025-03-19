import {
  Component,
  computed,
  effect,
  inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { AppSidebarComponent } from './app-sidebar.component';
import { AppTopbarComponent } from './app-topbar.component';
import { LayoutService } from './service/layout.service';
import { SwitchLayoutComponent } from './switch-layuot.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AppSidebarComponent,
    AppTopbarComponent,
    SwitchLayoutComponent,
  ],
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  layoutService = inject(LayoutService);
  renderer = inject(Renderer2);
  @ViewChild('sidebar') sidebar!: AppSidebarComponent;
  @ViewChild('topbar') topbar!: AppTopbarComponent;
  private clickSubscription: Subscription | null = null;

  classList = computed(() => ({
    'sidebar-vertical-active': this.layoutService.sidebarActive(),
    'sidebar-vertical-inactive': !this.layoutService.sidebarActive(),
    'sidebar-mobile-active': this.layoutService.sidebarMobileActive(),
    'sidebar-mobile-inactive': !this.layoutService.sidebarMobileActive(),
    'sidebar-vertical': this.layoutService.sidebarVertical(),
    'sidebar-horizontal': !this.layoutService.sidebarVertical(),
  }));

  constructor() {
    effect(() => {
      if (this.layoutService.sidebarMobileActive()) {
        this.startListening();
      } else {
        this.stopListening();
      }
    });
  }

  private startListening() {
    this.stopListening();
    this.clickSubscription = fromEvent(document, 'click').subscribe((event) => {
      const isOutsideClicked = !(
        this.sidebar.el.nativeElement.isSameNode(event.target) ||
        this.sidebar.el.nativeElement.contains(event.target) ||
        this.topbar.buttonToggle.nativeElement.isSameNode(event.target) ||
        this.topbar.buttonToggle.nativeElement.contains(event.target)
      );
      if (isOutsideClicked) {
        this.layoutService.sidebarMobileActive.set(false);
      }
    });
  }

  private stopListening() {
    this.clickSubscription?.unsubscribe();
    this.clickSubscription = null;
  }
}

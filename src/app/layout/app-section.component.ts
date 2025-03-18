import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/layout.service';
import { AppLinkComponent } from './app-link.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: '[app-section]',
  standalone: true,
  imports: [CommonModule, AppLinkComponent],
  templateUrl: './app-section.component.html',
  styleUrl: './app-section.component.scss',
  animations: [
    trigger('children', [
      state(
        'collapsed',
        style({
          height: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      transition(
        'collapsed <=> expanded',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppSectionComponent {
  @Input() item!: MenuItem;
  activeSubmenu: boolean = false;

  constructor(private layoutService: LayoutService) {}

  itemClick(event: Event) {
    if (this.item.items) {
      this.activeSubmenu = !this.activeSubmenu;
    }
  }

  get submenuAnimation() {
    return this.activeSubmenu ? 'expanded' : 'collapsed';
  }

  get isSidebarHorizontal(): boolean {
    return this.layoutService.sidebarVertical() === false;
  }
}

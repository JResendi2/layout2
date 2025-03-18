import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppLinkComponent } from './app-link.component';
import { LayoutService } from './service/layout.service';

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
  @Input() angle_down: boolean = true;
  @Input() level: number = 3;

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

  get typeSubmenu(){
    if(this.level === 1){
      return 'layout-menu-level-2';
    } else {
      return 'layout-menu';
    }
  }

  get typeHeader(){
    if(this.level === 1){
      return 'section-header-level-1';
    } else {
      return 'section-header';
    }
  }
}

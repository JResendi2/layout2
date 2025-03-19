import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuLinkComponent } from './menu-link.component';
import { MenuSectionComponent } from './menu-section.component';

@Component({
  selector: '[sidebar-section]',
  standalone: true,
  imports: [MenuSectionComponent, MenuLinkComponent],
  templateUrl: './sidebar-section.component.html',
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
export class SidebarSectionComponent {
  @Input() item!: MenuItem;
  activeSubmenu: boolean = false;

  itemClick(event: Event) {
    this.activeSubmenu = !this.activeSubmenu;
  }

  get submenuAnimation() {
    return this.activeSubmenu ? 'expanded' : 'collapsed';
  }
}

import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuLinkComponent } from './menu-link.component';
import { LayoutService } from './service/layout.service';

@Component({
    selector: '[menu-section]',
    imports: [CommonModule, MenuLinkComponent],
    templateUrl: './menu-section.component.html',
    animations: [
        trigger('children', [
            state('collapsed', style({
                height: '0',
            })),
            state('expanded', style({
                height: '*',
            })),
            transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
        ]),
    ]
})
export class MenuSectionComponent {
  @Input() item!: MenuItem;
  activeSubmenu: boolean = false;

  itemClick(event: Event) {
    if (this.item.items) {
      this.activeSubmenu = !this.activeSubmenu;
    }
  }

  get submenuAnimation() {
    return this.activeSubmenu ? 'expanded' : 'collapsed';
  }
}

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from './service/layout.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: '[app-menuitem]',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-menuitem.component.html',
  styleUrl: './app-menuitem.component.scss',
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
export class AppMenuitemComponent {
  @Output() hideMenuParent = new EventEmitter();
  @Input() item!: MenuItem;
  @Input() lavel: number = 2;
  activeSubMenuOnVertical: boolean = false;
  activeSubMenuOnHorizontal: boolean = false;

  constructor(private layoutService: LayoutService) {}

  itemClick(event: Event) {
    if (this.item.items) {
      // open submenu
      if (this.layoutService.sidebarVertical()) {
        this.activeSubMenuOnVertical = !this.activeSubMenuOnVertical;
      } else {
        this.activeSubMenuOnHorizontal = !this.activeSubMenuOnHorizontal;
      }
    } else {
      // es un enlace
      if (!this.layoutService.sidebarVertical()) {
        // el menu esta en modo horizontal
        this.hideMenuParent.emit(); // cerrar el menu
      }
    }
  }

  get submenuAnimation() {
    if (this.layoutService.sidebarVertical()) {
      return this.activeSubMenuOnVertical ? 'expanded' : 'collapsed';
    } else {
      return this.activeSubMenuOnHorizontal ? 'expanded' : 'collapsed';
    }
  }

  get isSidebarHorizontal(): boolean {
    return this.layoutService.sidebarVertical() === false;
  }

  get isLavelOne() {
    return this.isSidebarHorizontal && this.lavel === 1;
  }

  // este metodo pasarlo como output al li hijo
  // el li hijo va a emitir un valor false siempre que se presione
  hideMenuOnHorizontal() {
    this.activeSubMenuOnHorizontal = false;

    if (this.lavel === 2) {
      // ocultar los menus hacia arriba
      setTimeout(() => {
        this.hideMenuParent.emit();
      }, 250);
    }
  }
}

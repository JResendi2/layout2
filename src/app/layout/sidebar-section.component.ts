import { LayoutService } from './service/layout.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, computed, Input, Signal } from '@angular/core';
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
  static count_id: number = 1;
  private id: number = SidebarSectionComponent.count_id;
  private activeSubmenu: Signal<boolean>;

  constructor(private layoutService: LayoutService){
    SidebarSectionComponent.count_id++;
    this.activeSubmenu = computed(() => this.layoutService.currentSection() === this.id);
  }

  itemClick(event: Event) {
    if(this.layoutService.currentSection() === this.id){
      this.layoutService.currentSection.set(0)
    } else {
      this.layoutService.currentSection.set(this.id)
    }
  }

  get submenuAnimation() {
    return this.activeSubmenu() ? 'expanded' : 'collapsed';
  }

  get showAngleDown(){
    return this.layoutService.sidebarVertical() && this.layoutService.sidebarActive();
  }
}

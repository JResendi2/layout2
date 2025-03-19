import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/layout.service';

@Component({
  selector: '[menu-link]',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-link.component.html',
})
export class MenuLinkComponent {
  @Input() item!: MenuItem;

  constructor(private layoutService: LayoutService){}
  

  itemClick(event: Event) {
    if(this.layoutService.sidebarVertical() === false){
      this.layoutService.currentSection.set(0)
    } 

    if(this.layoutService.sidebarMobileActive()){
      this.layoutService.sidebarMobileActive.set(false)
    } 
  }

}

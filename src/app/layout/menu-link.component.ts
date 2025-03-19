import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: '[menu-link]',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-link.component.html',
})
export class MenuLinkComponent {
  @Input() item!: MenuItem;

}

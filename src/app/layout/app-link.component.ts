import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: '[app-link]',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app-link.component.html',
  styleUrl: './app-link.component.scss'
})
export class AppLinkComponent {
  @Input() item!: MenuItem;

}

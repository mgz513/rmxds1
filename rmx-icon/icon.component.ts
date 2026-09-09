import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

// Mirrors the "Flexible Icon" Figma component (node 1294:248), Material set only.
// Express set (custom product icons) is deliberately out of scope for now —
// see SKILL.md notes. Re-add an `expressIcon` input + svgIcon branch later.
export type RmxIconSize = 'small' | 'medium' | 'large' | 'x-large';
export type RmxIconColor =
  | 'default'
  | 'brand'
  | 'white'
  | 'error'
  | 'disabled'
  | 'dark-blue'
  | 'success'
  | 'attention';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  // Material Symbols ligature name, e.g. "add_circle", "arrow_drop_down",
  // "keyboard_arrow_down" — same names Figma's Material Icon set uses.
  @Input({ required: true }) name!: string;
  @Input() size: RmxIconSize = 'medium';
  @Input() color: RmxIconColor = 'default';

  get hostClasses(): string[] {
    return ['rmx-icon', `rmx-icon--${this.size}`, `rmx-icon--${this.color}`];
  }
}

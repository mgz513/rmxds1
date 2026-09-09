import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../rmx-icon/icon.component';

// Types match the JSON contract in SKILL.md's Component Registry.
// Valid type/size combinations are enforced by the JSON validator upstream
// (ajv against the schema) — this component trusts its inputs but warns
// in dev if it receives an undocumented combination.
export type RmxButtonType = 'primary' | 'secondary' | 'action-text' | 'marketing' | 'tab-button';
export type RmxButtonSize = 'default' | 'xl' | 'compact';

const VALID_SIZES_BY_TYPE: Record<RmxButtonType, RmxButtonSize[]> = {
  primary: ['default'],
  secondary: ['default', 'compact'],
  'action-text': ['default', 'xl'],
  marketing: ['default'],
  'tab-button': ['default'],
};

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: RmxButtonType = 'primary';
  @Input() size: RmxButtonSize = 'default';
  @Input() text = 'Button';
  @Input() disabled = false;

  // Material Symbols icon name (e.g. "add_circle"), or undefined for no icon.
  // Changed from boolean to string — see SKILL.md note on why an *ngIf on
  // real content (a name) replaces the earlier :empty-slot workaround.
  @Input() leadingIcon?: string;
  @Input() trailingIcon?: string;
  @Input() showText = true;

  ngOnChanges(): void {
    const validSizes = VALID_SIZES_BY_TYPE[this.type];
    if (!validSizes?.includes(this.size)) {
      console.warn(
        `[app-button] type="${this.type}" does not support size="${this.size}" per the RMX DS registry. ` +
          `Valid sizes for this type: ${validSizes?.join(', ')}`
      );
    }
    if (this.type === 'action-text' && this.size === 'xl') {
      console.warn(
        `[app-button] action-text + xl is reserved for primary menu-access buttons ` +
          `(e.g. Leasing Center, Bird's Eye View) per Figma DS documentation — confirm this usage is intentional.`
      );
    }
  }

  get hostClasses(): string[] {
    return [
      'rmx-btn',
      `rmx-btn--${this.type}`,
      `rmx-btn--${this.size}`,
      this.disabled ? 'is-disabled' : '',
    ].filter(Boolean);
  }

  // Icons should match each button type's text color, not a fixed default.
  // Primary/Tab Button/Split Button text is white-on-color; Secondary/Action
  // Text/Marketing text is colored-on-white. Disabled overrides both.
  get iconColor(): 'white' | 'brand' | 'dark-blue' | 'disabled' {
    if (this.disabled) return 'disabled';
    if (this.type === 'primary' || this.type === 'tab-button') return 'white';
    if (this.type === 'marketing') return 'dark-blue';
    return 'brand'; // secondary, action-text
  }
}

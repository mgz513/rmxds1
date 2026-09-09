import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';

// Drop this into your Angular app and route to it (or bootstrap it directly)
// to visually check every documented Button variant against the Figma frames.
// The "Show icons" toggle flips every leading/trailing icon slot on and off so
// you can compare centred label-only buttons against the icon layouts.
//
// Icons are plain inline <svg slot="..."> children projected into the
// component's icon slots; they inherit the button's text colour via
// `currentColor`. When showIcons is false the [leadingIcon]/[trailingIcon]
// inputs are false, the slot host element is not rendered, and nothing is
// projected.
@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px; padding: 32px; font-family: sans-serif;">
      <label style="display: flex; align-items: center; gap: 8px; font-size: 14px;">
        <input type="checkbox" [(ngModel)]="showIcons" />
        Show icons
      </label>

      <h3>Primary</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="primary" text="Continue" [trailingIcon]="showIcons">
          <svg slot="trailing-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </app-button>
        <app-button type="primary" text="Continue" [disabled]="true"></app-button>
      </div>

      <h3>Secondary</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="secondary" text="Cancel" [leadingIcon]="showIcons">
          <svg slot="leading-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M16 10H5M10 5l-5 5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </app-button>
        <app-button type="secondary" size="compact" text="Cancel"></app-button>
        <app-button type="secondary" text="Cancel" [disabled]="true"></app-button>
      </div>

      <h3>Action Text</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="action-text" text="Learn more" [trailingIcon]="showIcons">
          <svg slot="trailing-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </app-button>
        <app-button type="action-text" size="xl" text="Menu options" [trailingIcon]="showIcons">
          <svg slot="trailing-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </app-button>
      </div>

      <h3>Marketing</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="marketing" text="Get started" [trailingIcon]="showIcons">
          <svg slot="trailing-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </app-button>
      </div>

      <h3>Tab Button</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="tab-button" text="Overview" [leadingIcon]="showIcons">
          <svg slot="leading-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z" />
          </svg>
        </app-button>
      </div>
    </div>
  `,
})
export class ButtonDemoComponent {
  showIcons = true;
}

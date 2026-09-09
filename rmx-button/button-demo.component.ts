import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

// Drop this into your Angular app and route to it (or bootstrap it directly)
// to visually check every documented Button variant against the Figma frames.
@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px; padding: 32px; font-family: sans-serif;">
      <h3>Primary</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="primary" text="Continue" [trailingIcon]="true"></app-button>
        <app-button type="primary" text="Continue" [disabled]="true"></app-button>
      </div>

      <h3>Secondary</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="secondary" text="Cancel" [leadingIcon]="true"></app-button>
        <app-button type="secondary" size="compact" text="Cancel"></app-button>
        <app-button type="secondary" text="Cancel" [disabled]="true"></app-button>
      </div>

      <h3>Action Text</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="action-text" text="Learn more" [trailingIcon]="true"></app-button>
        <app-button type="action-text" size="xl" text="Menu options" [trailingIcon]="true"></app-button>
      </div>

      <h3>Marketing</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="marketing" text="Get started" [trailingIcon]="true"></app-button>
      </div>

      <h3>Tab Button</h3>
      <div style="display: flex; gap: 12px;">
        <app-button type="tab-button" text="Overview" [leadingIcon]="true"></app-button>
      </div>
    </div>
  `,
})
export class ButtonDemoComponent {}

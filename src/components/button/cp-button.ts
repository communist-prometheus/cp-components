import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Variant, Size } from '../../types/common.js';

@customElement('cp-button')
export class CpButton extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: var(--cp-spacing-xs, 0.5rem);
      padding: var(--cp-spacing-sm, 1rem) var(--cp-spacing-md, 1.5rem);
      border: none;
      border-radius: var(--cp-radius-sm, 0.5rem);
      font-family: inherit;
      font-size: inherit;
      cursor: pointer;
      transition: all var(--cp-transition-fast, 150ms cubic-bezier(0.4, 0, 0.2, 1));
      text-decoration: none;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .primary {
      background: var(--cp-color-accent, hsl(250, 84%, 54%));
      color: white;
    }

    .primary:hover:not(:disabled) {
      background: var(--cp-color-accent-hover, hsl(250, 84%, 48%));
    }

    .secondary {
      background: transparent;
      color: var(--cp-color-text-primary, hsl(0, 0%, 13%));
      border: 1px solid var(--cp-color-border, hsl(0, 0%, 90%));
    }

    .secondary:hover:not(:disabled) {
      background: var(--cp-color-surface, hsl(0, 0%, 98%));
    }

    .ghost {
      background: transparent;
      color: var(--cp-color-text-primary, hsl(0, 0%, 13%));
    }

    .ghost:hover:not(:disabled) {
      background: var(--cp-color-surface, hsl(0, 0%, 98%));
    }

    .sm {
      padding: calc(var(--cp-spacing-xs, 0.5rem) * 0.75) var(--cp-spacing-sm, 1rem);
      font-size: 0.875rem;
    }

    .lg {
      padding: var(--cp-spacing-md, 1.5rem) var(--cp-spacing-lg, 2rem);
      font-size: 1.125rem;
    }
  `;

  @property({ type: String })
  variant: Variant = 'primary';

  @property({ type: String })
  size: Size = 'md';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'button';

  private handleClick = (e: MouseEvent): void => {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('cp-click', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: e },
      })
    );
  };

  override render() {
    return html`
      <button
        class="${this.variant} ${this.size}"
        ?disabled=${this.disabled}
        type=${this.type}
        @click=${this.handleClick}
        part="button"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cp-button': CpButton;
  }
}

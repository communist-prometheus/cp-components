import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cp-card')
export class CpCard extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .card {
      background: var(--cp-color-surface, hsl(0, 0%, 98%));
      border: 1px solid var(--cp-color-border, hsl(0, 0%, 90%));
      border-radius: var(--cp-radius-md, 0.75rem);
      padding: var(--cp-spacing-lg, 2rem);
      transition: box-shadow var(--cp-transition-fast, 150ms cubic-bezier(0.4, 0, 0.2, 1));
    }

    .card.hoverable:hover {
      box-shadow: var(--cp-shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1));
      cursor: pointer;
    }

    .card.elevated {
      box-shadow: var(--cp-shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
    }

    .card.elevated.hoverable:hover {
      box-shadow: var(--cp-shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1));
    }
  `;

  @property({ type: Boolean })
  hoverable = false;

  @property({ type: Boolean })
  elevated = false;

  private handleClick = (e: MouseEvent): void => {
    if (!this.hoverable) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent('cp-card-click', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: e },
      })
    );
  };

  override render() {
    const classes = [
      'card',
      this.hoverable ? 'hoverable' : '',
      this.elevated ? 'elevated' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div
        class="${classes}"
        @click=${this.handleClick}
        part="card"
        role=${this.hoverable ? 'button' : 'article'}
        tabindex=${this.hoverable ? '0' : undefined}
        @keydown=${this.handleKeydown}
      >
        <slot></slot>
      </div>
    `;
  }

  private handleKeydown = (e: KeyboardEvent): void => {
    if (!this.hoverable) {
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleClick(e as unknown as MouseEvent);
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'cp-card': CpCard;
  }
}

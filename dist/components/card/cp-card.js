var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let CpCard = class CpCard extends LitElement {
    constructor() {
        super(...arguments);
        this.hoverable = false;
        this.elevated = false;
        this.handleClick = (e) => {
            if (!this.hoverable) {
                return;
            }
            this.dispatchEvent(new CustomEvent('cp-card-click', {
                bubbles: true,
                composed: true,
                detail: { originalEvent: e },
            }));
        };
        this.handleKeydown = (e) => {
            if (!this.hoverable) {
                return;
            }
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleClick(e);
            }
        };
    }
    static { this.styles = css `
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
  `; }
    render() {
        const classes = [
            'card',
            this.hoverable ? 'hoverable' : '',
            this.elevated ? 'elevated' : '',
        ]
            .filter(Boolean)
            .join(' ');
        return html `
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
};
__decorate([
    property({ type: Boolean })
], CpCard.prototype, "hoverable", void 0);
__decorate([
    property({ type: Boolean })
], CpCard.prototype, "elevated", void 0);
CpCard = __decorate([
    customElement('cp-card')
], CpCard);
export { CpCard };
//# sourceMappingURL=cp-card.js.map
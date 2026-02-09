import { LitElement } from 'lit';
export declare class CpCard extends LitElement {
    static styles: import("lit").CSSResult;
    hoverable: boolean;
    elevated: boolean;
    private handleClick;
    render(): import("lit-html").TemplateResult<1>;
    private handleKeydown;
}
declare global {
    interface HTMLElementTagNameMap {
        'cp-card': CpCard;
    }
}
//# sourceMappingURL=cp-card.d.ts.map
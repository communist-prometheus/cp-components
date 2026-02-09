import { LitElement } from 'lit';
import type { Variant, Size } from '../../types/common.js';
export declare class CpButton extends LitElement {
    static styles: import("lit").CSSResult;
    variant: Variant;
    size: Size;
    disabled: boolean;
    type: 'button' | 'submit' | 'reset';
    private handleClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cp-button': CpButton;
    }
}
//# sourceMappingURL=cp-button.d.ts.map
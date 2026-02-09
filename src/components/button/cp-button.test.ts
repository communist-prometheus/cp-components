import { expect, fixture, html } from '@open-wc/testing';
import './cp-button.js';
import type { CpButton } from './cp-button.js';

describe('CpButton', () => {
  it('renders with default properties', async () => {
    const el = await fixture<CpButton>(html`<cp-button>Click me</cp-button>`);
    
    expect(el).to.exist;
    expect(el.variant).to.equal('primary');
    expect(el.size).to.equal('md');
    expect(el.disabled).to.be.false;
  });

  it('renders button text in slot', async () => {
    const el = await fixture<CpButton>(html`<cp-button>Test Button</cp-button>`);
    
    expect(el.textContent?.trim()).to.equal('Test Button');
  });

  it('applies variant classes correctly', async () => {
    const el = await fixture<CpButton>(html`<cp-button variant="secondary">Button</cp-button>`);
    const button = el.shadowRoot?.querySelector('button');
    
    expect(button?.classList.contains('secondary')).to.be.true;
  });

  it('applies size classes correctly', async () => {
    const el = await fixture<CpButton>(html`<cp-button size="lg">Button</cp-button>`);
    const button = el.shadowRoot?.querySelector('button');
    
    expect(button?.classList.contains('lg')).to.be.true;
  });

  it('handles disabled state', async () => {
    const el = await fixture<CpButton>(html`<cp-button disabled>Button</cp-button>`);
    const button = el.shadowRoot?.querySelector('button');
    
    expect(button?.disabled).to.be.true;
  });

  it('dispatches cp-click event on click', async () => {
    const el = await fixture<CpButton>(html`<cp-button>Button</cp-button>`);
    const button = el.shadowRoot?.querySelector('button');
    
    let eventFired = false;
    el.addEventListener('cp-click', () => {
      eventFired = true;
    });
    
    button?.click();
    expect(eventFired).to.be.true;
  });

  it('does not dispatch cp-click when disabled', async () => {
    const el = await fixture<CpButton>(html`<cp-button disabled>Button</cp-button>`);
    const button = el.shadowRoot?.querySelector('button');
    
    let eventFired = false;
    el.addEventListener('cp-click', () => {
      eventFired = true;
    });
    
    button?.click();
    expect(eventFired).to.be.false;
  });

  it('sets correct button type', async () => {
    const el = await fixture<CpButton>(html`<cp-button type="submit">Submit</cp-button>`);
    const button = el.shadowRoot?.querySelector('button');
    
    expect(button?.type).to.equal('submit');
  });

  it('is accessible', async () => {
    const el = await fixture<CpButton>(html`<cp-button>Accessible Button</cp-button>`);
    
    await expect(el).to.be.accessible();
  });
});

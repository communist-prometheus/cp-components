import { expect, fixture, html } from '@open-wc/testing';
import './cp-card.js';
import type { CpCard } from './cp-card.js';

describe('CpCard', () => {
  it('renders with default properties', async () => {
    const el = await fixture<CpCard>(html`<cp-card>Card content</cp-card>`);
    
    expect(el).to.exist;
    expect(el.hoverable).to.be.false;
    expect(el.elevated).to.be.false;
  });

  it('renders card content in slot', async () => {
    const el = await fixture<CpCard>(html`<cp-card>Test Content</cp-card>`);
    
    expect(el.textContent?.trim()).to.equal('Test Content');
  });

  it('applies hoverable class when hoverable is true', async () => {
    const el = await fixture<CpCard>(html`<cp-card hoverable>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    expect(card?.classList.contains('hoverable')).to.be.true;
  });

  it('applies elevated class when elevated is true', async () => {
    const el = await fixture<CpCard>(html`<cp-card elevated>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    expect(card?.classList.contains('elevated')).to.be.true;
  });

  it('applies both hoverable and elevated classes', async () => {
    const el = await fixture<CpCard>(html`<cp-card hoverable elevated>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    expect(card?.classList.contains('hoverable')).to.be.true;
    expect(card?.classList.contains('elevated')).to.be.true;
  });

  it('dispatches cp-card-click event when hoverable and clicked', async () => {
    const el = await fixture<CpCard>(html`<cp-card hoverable>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    let eventFired = false;
    el.addEventListener('cp-card-click', () => {
      eventFired = true;
    });
    
    (card as HTMLElement)?.click();
    expect(eventFired).to.be.true;
  });

  it('does not dispatch cp-card-click when not hoverable', async () => {
    const el = await fixture<CpCard>(html`<cp-card>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    let eventFired = false;
    el.addEventListener('cp-card-click', () => {
      eventFired = true;
    });
    
    (card as HTMLElement)?.click();
    expect(eventFired).to.be.false;
  });

  it('has correct role when hoverable', async () => {
    const el = await fixture<CpCard>(html`<cp-card hoverable>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    expect(card?.getAttribute('role')).to.equal('button');
  });

  it('has correct role when not hoverable', async () => {
    const el = await fixture<CpCard>(html`<cp-card>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    expect(card?.getAttribute('role')).to.equal('article');
  });

  it('has tabindex when hoverable', async () => {
    const el = await fixture<CpCard>(html`<cp-card hoverable>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    expect(card?.getAttribute('tabindex')).to.equal('0');
  });

  it('triggers click on Enter key when hoverable', async () => {
    const el = await fixture<CpCard>(html`<cp-card hoverable>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    let eventFired = false;
    el.addEventListener('cp-card-click', () => {
      eventFired = true;
    });
    
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    card?.dispatchEvent(event);
    
    expect(eventFired).to.be.true;
  });

  it('triggers click on Space key when hoverable', async () => {
    const el = await fixture<CpCard>(html`<cp-card hoverable>Card</cp-card>`);
    const card = el.shadowRoot?.querySelector('.card');
    
    let eventFired = false;
    el.addEventListener('cp-card-click', () => {
      eventFired = true;
    });
    
    const event = new KeyboardEvent('keydown', { key: ' ' });
    card?.dispatchEvent(event);
    
    expect(eventFired).to.be.true;
  });

  it('is accessible', async () => {
    const el = await fixture<CpCard>(html`<cp-card>Accessible Card</cp-card>`);
    
    await expect(el).to.be.accessible();
  });

  it('is accessible when hoverable', async () => {
    const el = await fixture<CpCard>(html`<cp-card hoverable>Accessible Card</cp-card>`);
    
    await expect(el).to.be.accessible();
  });
});

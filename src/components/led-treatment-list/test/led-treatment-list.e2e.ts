import { newE2EPage } from '@stencil/core/testing';

describe('led-treatment-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<led-treatment-list></led-treatment-list>');

    const element = await page.find('led-treatment-list');
    expect(element).toHaveClass('hydrated');
  });
});

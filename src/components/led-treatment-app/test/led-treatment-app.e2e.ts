import { newE2EPage } from '@stencil/core/testing';

describe('led-treatment-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<led-treatment-app></led-treatment-app>');

    const element = await page.find('led-treatment-app');
    expect(element).toHaveClass('hydrated');
  });
});

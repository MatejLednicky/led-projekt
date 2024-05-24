import { newE2EPage } from '@stencil/core/testing';

describe('led-treatment-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<led-treatment-editor></led-treatment-editor>');

    const element = await page.find('led-treatment-editor');
    expect(element).toHaveClass('hydrated');
  });
});

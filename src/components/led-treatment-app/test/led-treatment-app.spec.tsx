import { newSpecPage } from '@stencil/core/testing';
import { LedTreatmentApp } from '../led-treatment-app';

describe('led-treatment-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LedTreatmentApp],
      html: `<led-treatment-app></led-treatment-app>`,
    });
    expect(page.root).toEqualHtml(`
      <led-treatment-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </led-treatment-app>
    `);
  });
});

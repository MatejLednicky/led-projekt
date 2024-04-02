import { newSpecPage } from '@stencil/core/testing';
import { LedTreatmentList } from '../led-treatment-list';

describe('led-treatment-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LedTreatmentList],
      html: `<led-treatment-list></led-treatment-list>`,
    });
    expect(page.root).toEqualHtml(`
      <led-treatment-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </led-treatment-list>
    `);
  });
});

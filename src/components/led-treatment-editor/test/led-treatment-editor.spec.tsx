import { newSpecPage } from '@stencil/core/testing';
import { LedTreatmentEditor } from '../led-treatment-editor';

describe('led-treatment-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LedTreatmentEditor],
      html: `<led-treatment-editor></led-treatment-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <led-treatment-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </led-treatment-editor>
    `);
  });
});

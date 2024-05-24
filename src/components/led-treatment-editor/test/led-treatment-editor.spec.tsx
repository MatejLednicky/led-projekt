import { newSpecPage } from '@stencil/core/testing';
import { LedTreatmentEditor } from '../led-treatment-editor';

describe('led-treatment-editor', () => {
  it('renders', async () => {
    await newSpecPage({
      components: [LedTreatmentEditor],
      html: `<led-treatment-editor></led-treatment-editor>`,
    });
  });
});

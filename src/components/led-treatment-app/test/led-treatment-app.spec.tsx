import { newSpecPage } from '@stencil/core/testing';
import { LedTreatmentApp } from '../led-treatment-app';

describe('led-treatment-app', () => {
  it('renders', async () => {
    await newSpecPage({
      components: [LedTreatmentApp],
      html: `<led-treatment-app></led-treatment-app>`,
    });
  });
});

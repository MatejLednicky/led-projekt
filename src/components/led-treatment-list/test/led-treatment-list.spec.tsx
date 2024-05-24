import { newSpecPage } from '@stencil/core/testing';
import { LedTreatmentList } from '../led-treatment-list';

describe('led-treatment-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LedTreatmentList],
      html: `<led-treatment-list></led-treatment-list>`,
    });

    const wlList = page.rootInstance as LedTreatmentList;
    const expectedPatients = wlList?.treatments?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});

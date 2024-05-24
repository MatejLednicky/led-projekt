import { Config } from '@stencil/core';

export const config: Config = {
  globalScript: 'src/global/app.ts',
  namespace: 'led-projekt',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    transformIgnorePatterns: ["/node_modules/(?!axios)"],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
  }
};

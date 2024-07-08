import type {CodegenConfig} from '@graphql-codegen/cli';
import {pluckConfig, preset, getSchema} from '@shopify/hydrogen-codegen';
import {preset as adminApiPreset, ApiType} from '@shopify/api-codegen-preset';

export default {
  overwrite: true,
  pluckConfig,
  generates: {
    'storefrontapi.generated.d.ts': {
      preset,
      schema: getSchema('storefront'),
      documents: [
        './*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        '!./app/graphql/customer-account/*.{ts,tsx,js,jsx}',
      ],
    },
    'customer-accountapi.generated.d.ts': {
      preset,
      schema: getSchema('customer-account'),
      documents: ['./app/graphql/customer-account/*.{ts,tsx,js,jsx}'],
    },
    'adminapi.generated.d.ts': {
      preset: adminApiPreset,
      presetConfig: {
        apiType: ApiType.Admin,
      },
      plugins: ['typescript'],
      schema: 'https://shopify.dev/admin-graphql-direct-proxy/2024-07',
    },
  },
} as CodegenConfig;

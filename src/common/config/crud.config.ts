import { CrudGlobalConfig } from '@nestjsx/crud';

export const crudGlobalConfig: CrudGlobalConfig = {
  query: {
    maxLimit: 10000,
    cache: 2000,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['replaceOneBase'],
  },
};

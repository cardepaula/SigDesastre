import { CrudGlobalConfig } from '@nestjsx/crud';

export const crudGlobalConfig: CrudGlobalConfig = {
  query: {
    cache: 2000,
  },
  routes: {
    exclude: ['replaceOneBase'],
  },
};

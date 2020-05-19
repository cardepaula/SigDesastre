import { Module } from '@nestjs/common';
import {
  databaseProviders,
  databaseTweetProviders,
  databaseRSSProviders,
} from './database.providers';

@Module({
  providers: [
    ...databaseProviders,
    ...databaseTweetProviders,
    ...databaseRSSProviders,
  ],
  exports: [
    ...databaseProviders,
    ...databaseTweetProviders,
    ...databaseRSSProviders,
  ],
})
export class DatabaseModule {}

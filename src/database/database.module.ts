import { Module } from '@nestjs/common';
import { databaseProviders, databaseTweetProviders } from './database.providers';

@Module({
  providers: [...databaseProviders, ...databaseTweetProviders],
  exports: [...databaseProviders, ...databaseTweetProviders],
})
export class DatabaseModule {}
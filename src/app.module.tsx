import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {IndexModule} from './index/subindex/subindex.module';
import {TopicModule} from './topic/subindex/subindex.module';

@Module({
  imports: [
    IndexModule,
    TopicModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

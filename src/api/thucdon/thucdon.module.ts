import { Module } from '@nestjs/common';
import { ThucdonController } from './thucdon.controller';
import { ThucdonService } from './thucdon.service';

@Module({
  controllers: [ThucdonController],
  providers: [ThucdonService]
})
export class ThucdonModule {}

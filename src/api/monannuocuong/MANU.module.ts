import { Module } from '@nestjs/common';
import { MANUService } from './MANU.service';
import { MANUController } from './MANU.controller';
import { MANU } from './entity/MANU.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  providers: [MANUService],
  controllers: [MANUController],
  imports: [
    TypeOrmModule.forFeature([MANU])]
})
export class MANUModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './nhanVien.controller';
import { User } from './entity/nhanVien.entity';
import { UserService } from './nhanVien.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto/nhanVien.dto';
import { User } from './entity/nhanVien.entity';


@Injectable()
export class UserService {
  [x: string]: any;
  @InjectRepository(User)
  private readonly repository: Repository<User>;


  public getUser(id: number): Promise<User> {
    let user = this.repository.findOne({where:{id, isDeleted:false}});
    return user;
  }

  async getAllUser(){
    let users = this.repository.find({where:{isDeleted:false}});
    return users;
  }
  public createUser(body: CreateUserDto){
    const user: CreateUserDto = new CreateUserDto();

    user.TenNguoiDung = body.TenNguoiDung;
    user.email = body.email;
    user.MatKhau = body.MatKhau;
    user.CMT = body.CMT;
    user.ChucVu = body.ChucVu;
    user.DiaChi = body.DiaChi;
    user.GioiTinh = body.GioiTinh;
    user.NgaySinh = body.NgaySinh;
    user.SDT = body.SDT;

    return this.repository.save(user);
  }
  async updateUser(id: number, post: UpdateUserDto) {
    await this.repository.update(id, post);
    const updateUser = await this.repository.findOne({where : {id}});
    if (updateUser) {
      return updateUser;
    }
  }
  async getByEmail(email: string) {
    const user = await this.repository.findOne({where : {email}});
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }
  
}
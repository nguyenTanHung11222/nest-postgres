import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMonAnDto, UpdateMonAnDto } from './dto/monAn.dto';
import { MonAn } from './entities/monAn.entities';
@Injectable()
export class MonAnService {
    [x: string]: any;
    @InjectRepository(MonAn)
    private readonly repository: Repository<MonAn>;
  
    public getMonAn(maMonAn: number): Promise<MonAn> {
        let MonAn = this.repository.findOne({where:{maThucDon:maMonAn}});
        return MonAn;
      }
    
      async getAllMonAn(){
        let MonAn = this.repository.find();
        return MonAn;
      }
      public createMonAn(body: CreateMonAnDto){
        const MonAn: CreateMonAnDto = new CreateMonAnDto();

        MonAn.TenMonAn = body.TenMonAn;
        MonAn.DonGia = body.DonGia;
        MonAn.MoTa = body.MoTa;
        MonAn.TrangThai = body.TrangThai;
        MonAn.HinhAnh = body.HinhAnh;
        MonAn.maLoaiMonAn = body.maLoaiMonAn;
    
        return this.repository.save(MonAn);
      }
      async updateMonAn(maMonAn: number, post: UpdateMonAnDto) {
        await this.repository.update(maMonAn, post);
        const updateMonAn = await this.repository.findOne({where : {maThucDon:maMonAn}});
        if (updateMonAn) {
          return updateMonAn;
        }
      }
      async getByMaLoai(maLoaiMonAn: string) {
        const MonAn = await this.repository.findOne({where : {maLoaiSanPham:maLoaiMonAn}});
        if (MonAn) {
          return MonAn;
        }
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
      }
      

}

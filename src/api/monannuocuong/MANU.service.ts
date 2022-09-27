import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMANUDto, UpdateMANUDto } from './dto/MANU.dto';
import { MANU } from './entity/MANU.entity';
@Injectable()
export class MANUService {
    [x: string]: any;
    @InjectRepository(MANU)
    private readonly repository: Repository<MANU>;
  
    public getMANU(maMonAnNuocUong: number): Promise<MANU> {
        let manu = this.repository.findOne({where:{maMonAnNuocUong}});
        return manu;
      }
    
      async getAllMANU(){
        let manu = this.repository.find();
        return manu;
      }
      public createMANU(body: CreateMANUDto){
        const manu: CreateMANUDto = new CreateMANUDto();
    
        manu.TenMonAn = body.TenMonAn;
        manu.DonGia = body.DonGia;
        manu.MoTa = body.MoTa;
        manu.TrangThai = body.TrangThai;
        manu.HinhAnh = body.HinhAnh;
        manu.maLoaiMANU = body.maLoaiMANU;
    
        return this.repository.save(manu);
      }
      async updateMANU(maMonAnNuocUong: number, post: UpdateMANUDto) {
        await this.repository.update(maMonAnNuocUong, post);
        const updateMANU = await this.repository.findOne({where : {maMonAnNuocUong}});
        if (updateMANU) {
          return updateMANU;
        }
      }
      async getByMaLoai(maLoaiMANU: number) {
        const manu = await this.repository.findOne({where : {maLoaiMANU}});
        if (manu) {
          return manu;
        }
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
      }
      

}

import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateNuocUongDto, UpdateNuocUongDto } from './dto/NuocUong.dto';
import { NuocUong } from './entity/NuocUong.entity';
@Injectable()
export class NuocUongService {
    [x: string]: any;
    @InjectRepository(NuocUong)
    private readonly repository: Repository<NuocUong>;
  
    public getNuocUong(maNuocUong: number): Promise<NuocUong> {
        let NuocUong = this.repository.findOne({where:{maNuocUong}});
        return NuocUong;
      }
    
      async getAllNuocUong(){
        let NuocUong = this.repository.find();
        return NuocUong;
      }
      public createNuocUong(body: CreateNuocUongDto){
        const NuocUong: CreateNuocUongDto = new CreateNuocUongDto();

        NuocUong.TenNuocUong = body.TenNuocUong;
        NuocUong.DonGia = body.DonGia;
        NuocUong.MoTa = body.MoTa;
        NuocUong.TrangThai = body.TrangThai;
        NuocUong.HinhAnh = body.HinhAnh;
        NuocUong.maLoaiNuocUong = body.maLoaiNuocUong;
    
        return this.repository.save(NuocUong);
      }
      async updateNuocUong(maNuocUong: number, post: UpdateNuocUongDto) {
        await this.repository.update(maNuocUong, post);
        const updateNuocUong = await this.repository.findOne({where : {maNuocUong}});
        if (updateNuocUong) {
          return updateNuocUong;
        }
      }
      async getByMaLoai(maLoaiNuocUong: number) {
        const NuocUong = await this.repository.findOne({where : {maLoaiNuocUong}});
        if (NuocUong) {
          return NuocUong;
        }
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
      }
      

}

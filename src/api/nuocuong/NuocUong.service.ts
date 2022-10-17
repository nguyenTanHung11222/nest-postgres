import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateNuocUongDto, UpdateNuocUongDto } from './dto/NuocUong.dto';
import { NuocUong } from './entities/NuocUong.entities';
@Injectable()
export class NuocUongService {
    [x: string]: any;
    @InjectRepository(NuocUong)
    private readonly repository: Repository<NuocUong>;
  
    public getNuocUong(maNuocUong: number): Promise<NuocUong> {
        let NuocUong = this.repository.findOne({where:{maThucDon:maNuocUong}});
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
        const updateNuocUong = await this.repository.findOne({where : {maThucDon:maNuocUong}});
        if (updateNuocUong) {
          return updateNuocUong;
        }
      }
      async getByMaLoai(maLoaiNuocUong: string) {
        const NuocUong = await this.repository.findOne({where : {maLoaiSanPham:maLoaiNuocUong}});
        if (NuocUong) {
          return NuocUong;
        }
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
      }
      

}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKhachHangDto } from './dto/khachhang.dto';
import { KhachHang } from './entity/khachhang.entity';

@Injectable()
export class KhachhangService {
    [x: string]: any;
    @InjectRepository(KhachHang)
    private readonly repository: Repository<KhachHang>;
  
  
    public getKhachHang(maKhachHang: number): Promise<KhachHang> {
      let khachHang = this.repository.findOne({where:{ maKhachHang , isDeleted:false}});
      return khachHang;
    }
  
    async getAllKhachHang(){
      let KhachHangs = this.repository.find({where:{isDeleted:false}});
      return KhachHangs;
    }
    public createKhachHang(body: CreateKhachHangDto){
      const KhachHang: CreateKhachHangDto = new CreateKhachHangDto();
  
      KhachHang.tenKhachHang = body.tenKhachHang;
      KhachHang.email = body.email;
  //    KhachHang.MatKhau = body.MatKhau;
      KhachHang.CMT = body.CMT;
   //   KhachHang.ChucVu = body.ChucVu;
      KhachHang.diaChi = body.diaChi;
      KhachHang.gioiTinh = body.gioiTinh;
      KhachHang.ngaySinh = body.ngaySinh;
      KhachHang.SDT = body.SDT;
  
      return this.repository.save(KhachHang);
    }
    async updateKhachHang(maKhachHang: number, post: CreateKhachHangDto) {
      await this.repository.update(maKhachHang, post);
      const updateKhachHang = await this.repository.findOne({where : {maKhachHang}});
      if (updateKhachHang) {
        return updateKhachHang;
      }
    }
    async getByEmail(email: string) {
      const KhachHang = await this.repository.findOne({where : {email}});
      if (KhachHang) {
        return KhachHang;
      }
      throw new HttpException('KhachHang with this email does not exist', HttpStatus.NOT_FOUND);
    }
    
  }
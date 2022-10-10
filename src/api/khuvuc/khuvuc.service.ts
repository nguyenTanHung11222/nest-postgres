import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKhuVucDto, UpdateKhuVucDto } from './dto/khuvuc.dto';
import { KhuVuc } from './entity/khuvuc.entity';

@Injectable()
export class KhuvucService {
    [x: string]: any;
    @InjectRepository(KhuVuc)
    private readonly repository: Repository<KhuVuc>;
  
    public getKhuVuc(maKhuVuc: number): Promise<KhuVuc> {
        let KhuVuc = this.repository.findOne({where:{maKhuVuc:maKhuVuc}});
        return KhuVuc;
      }
    
      async getAllKhuVuc(){
        let KhuVuc = this.repository.find();
        return KhuVuc;
      }
      public createKhuVuc(body: CreateKhuVucDto){
        const KhuVuc: CreateKhuVucDto = new CreateKhuVucDto();
    
        return this.repository.save(body);
      }
      async updateKhuVuc(maKhuVuc: number, post: UpdateKhuVucDto) {
        await this.repository.update(maKhuVuc, post);
        const updateKhuVuc = await this.repository.findOne({where : {maKhuVuc}});
        if (updateKhuVuc) {
          return updateKhuVuc;
        }
      }
    //   async getByMaLoai(maLoaiKhuVuc: number) {
    //     const KhuVuc = await this.repository.findOne({where : {maLoaiKhuVuc}});
    //     if (KhuVuc) {
    //       return KhuVuc;
    //     }
    //     throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    //   }
      




}

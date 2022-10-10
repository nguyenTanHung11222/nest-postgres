import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBanDto, UpdateBanDto } from './dto/ban.dto';
import { Ban } from './entity/ban.entity';

@Injectable()
export class BanService {

    [x: string]: any;
    @InjectRepository(Ban)
    private readonly repository: Repository<Ban>;
  
    public getBan(maBan: number): Promise<Ban> {
        let Ban = this.repository.findOne({where:{maBan:maBan}});
        return Ban;
      }
    
      async getAllBan(){
        let Ban = this.repository.find();
        return Ban;
      }
      public createBan(body: CreateBanDto){

    
        return this.repository.save(body);
      }
      async updateBan(maBan: number, post: UpdateBanDto) {
        await this.repository.update(maBan, post);
        const updateBan= await this.repository.findOne({where : {maBan}});
        if (updateBan) {
          return updateBan;
        }
      }
      async getByBan(maBan: number) {
        const Ban = await this.repository.findOne({where : {maBan}});
        if (Ban) {
          return Ban;
        }
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
      }
      

}

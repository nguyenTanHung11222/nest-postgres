import { ApiProperty } from '@nestjs/swagger';
import { Ban } from 'src/api/ban/entity/ban.entity';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KhuVuc {
  @PrimaryGeneratedColumn()
  maKhuVuc: number;
  @Column()
  tenKhuVuc: string;
  @Column()
  moTa: string;
  @Column()
  hinhAnh: string;

  // Note: Below line dont show on swagger, need read document more!
  @ApiProperty({
    description: '',
  })
  @OneToMany(() => Ban, (Ban) => Ban.khuVuc)
  ban: Ban[];
}

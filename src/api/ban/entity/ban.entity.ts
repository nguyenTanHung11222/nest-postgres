import { KhuVuc } from 'src/api/khuvuc/entity/khuvuc.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ban {
  @PrimaryGeneratedColumn()
  maBan: number;
  @Column()
  tenBan: string;

  @Column()
  soLuongToiDa:number;

  @Column()
  trangThai:string;

  @ManyToOne(() => KhuVuc, (khuVuc) => khuVuc.ban)
  khuVuc: KhuVuc;
}

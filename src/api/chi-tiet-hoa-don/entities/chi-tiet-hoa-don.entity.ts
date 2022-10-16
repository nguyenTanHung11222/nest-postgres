import { HoaDon } from 'src/api/hoa-don/entities/hoa-don.entity';
import { MonAn } from 'src/api/monan/entity/monAn.entity';
import { NuocUong } from 'src/api/nuocuong/entity/NuocUong.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ChiTietHoaDon {
  @PrimaryGeneratedColumn()
  maHoaDon: number;

  @ManyToOne(() => HoaDon, (hd) => hd.dSChiTietHoadon)
  hoaDon: HoaDon;
  @OneToOne(() => MonAn)
  @JoinColumn()
  monAn: MonAn | null;
  @OneToOne(() => NuocUong)
  @JoinColumn()
  nuocUong: NuocUong | null;

  @Column()
  soLuong: number;
  @Column()
  donGia: number;
  @Column()
  thanhTien: number;
  @Column()
  ghiChu: string;
}

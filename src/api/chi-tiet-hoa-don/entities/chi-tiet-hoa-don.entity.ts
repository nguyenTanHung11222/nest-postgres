import { HoaDon } from 'src/api/hoa-don/entities/hoa-don.entity';
import { MonAn } from 'src/api/monan/entities/monAn.entities';
import { NuocUong } from 'src/api/nuocuong/entities/NuocUong.entities';
import { ThucDon } from 'src/common/thucdon/thucdon.entity';
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

  @ManyToOne(() => HoaDon, (hd) => hd.chiTietHoaDons)
  hoaDon: HoaDon;

  @ManyToOne(() => (ThucDon), (td) => td.chiTietHoaDons)
  thucDon: ThucDon;

  @Column()
  soLuong: number;
  @Column()
  donGia: number;
  @Column()
  thanhTien: number;
  @Column()
  ghiChu: string;
}

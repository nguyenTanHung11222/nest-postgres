import { Ban } from 'src/api/ban/entity/ban.entity';
import { KhachHang } from 'src/api/khachhang/entity/khachhang.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DonDatBan {
  @PrimaryGeneratedColumn()
  maDonDatBan: number;
  @Column()
  maKhachHang: string;

  @ManyToOne(() => Ban, (ban) => ban.donDatBan)
  ban: Ban;
  @ManyToOne(() => KhachHang, (kh) => kh.donDatBan)
  khachHang: KhachHang;

  @Column()
  thoiGianDuKienSuDung: number;
  @Column({ type: 'timestamptz' }) // Not recommended
  thoiGianBatDauSuDung: Date;
  @Column({ type: 'timestamptz' }) // Not recommended
  thoiGianDat: Date;
  @Column()
  datCoc: number;
  @Column()
  maBan: number;
  @Column()
  soLuong: number;
  @Column()
  ghiChu: string;
}

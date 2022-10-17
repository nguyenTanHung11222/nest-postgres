import { ChiTietHoaDon } from 'src/api/chi-tiet-hoa-don/entities/chi-tiet-hoa-don.entity';
import { DonDatBan } from 'src/api/don-dat-ban/entities/don-dat-ban.entity';
import { User } from 'src/api/nhanVien/entity/nhanVien.entity';
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
export class HoaDon {
  @PrimaryGeneratedColumn()
  maHoaDon: number;

  @Column({ type: 'timestamptz' }) // Not recommended
  thoiGianHoanTat: Date;
  @Column({ type: 'timestamptz' }) // Not recommended
  thoiGianNhan: Date;

  @OneToOne(() => DonDatBan)
  @JoinColumn()
  donDatBan: DonDatBan;

  @OneToMany(() => ChiTietHoaDon, (cthd) => cthd.hoaDon)
  chiTietHoaDons: ChiTietHoaDon[];
  @ManyToOne(() => User, (cthd) => cthd.dsHoaDon)
  nguoiTaoHD: ChiTietHoaDon[];

  @Column()
  soLuongkhach: number;
  @Column()
  ghiChu: string;
  @Column()
  trangThai: string;
  @Column()
  maDonDatHang: string;
  @Column()
  maNhanVien: string;
  @Column()
  hinhThucThanhToan: string;
}

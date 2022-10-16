import { DonDatBan } from 'src/api/don-dat-ban/entities/don-dat-ban.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class KhachHang {
  @PrimaryGeneratedColumn()
  public maKhachHang!: number;

  @Column({ type: 'varchar', length: 120 })
  public tenKhachHang: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  //   @Column({ type: 'varchar', length: 30 })
  //   public MatKhau: string;
  @OneToMany(() => DonDatBan, (ddb) => ddb.khachHang)
  donDatBan: DonDatBan[];
  @Column({ type: 'varchar', length: 30 })
  public CMT: string;

  @Column({ type: 'varchar', length: 30 })
  public DiaChi: string;

  @Column({ type: 'varchar', length: 30 })
  public GioiTinh: string;

  @Column({ type: 'varchar', length: 30 })
  public SDT: string;

  @Column()
  public NgaySinh: Date;

  @Column({ type: 'boolean' })
  public isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}

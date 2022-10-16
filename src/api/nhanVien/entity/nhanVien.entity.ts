import { HoaDon } from 'src/api/hoa-don/entities/hoa-don.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public TenNguoiDung: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'varchar', length: 30 })
  public MatKhau: string;

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

  @Column({ type: 'varchar', length: 30 })
  public ChucVU: string;

  @Column({ type: 'boolean' })
  public isDeleted: boolean;
  @OneToMany(() => HoaDon, (hd) => hd.nguoiTaoHD)
  dsHoaDon: HoaDon[];

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}

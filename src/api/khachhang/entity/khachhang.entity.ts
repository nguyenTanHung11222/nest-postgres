import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

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

  @Column({ type: 'boolean'})
  public isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

}
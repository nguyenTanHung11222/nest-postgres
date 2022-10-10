import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class NuocUong {
  @PrimaryGeneratedColumn()
  public maNuocUong: number;

  @Column({ type: 'real'})
  public DonGia: number;

  @Column({ type: 'varchar', length: 120 })
  public TenNuocUong: string;

  @Column({ type: 'varchar', length: 120 })
  public MoTa: string;

  @Column({ type: 'varchar', length: 30 })
  public TrangThai: string;

  @Column({ type: 'varchar', length: 225 })
  public HinhAnh: string;

  @Column({ type: 'int'})
  public soLuongTon: number;
  
  @Column({ type: 'varchar'})
  public donViTinh: string;

  @Column({ type: 'int'})
  public maLoaiNuocUong: number;


  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

}
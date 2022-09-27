import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class MANU {
  @PrimaryGeneratedColumn()
  public maMonAnNuocUong: number;

  @Column({ type: 'real'})
  public DonGia: number;

  @Column({ type: 'varchar', length: 120 })
  public TenMonAn: string;

  @Column({ type: 'varchar', length: 120 })
  public MoTa: string;

  @Column({ type: 'varchar', length: 30 })
  public TrangThai: string;

  @Column({ type: 'varchar', length: 30 })
  public HinhAnh: string;
  
  @Column({ type: 'int'})
  public maLoaiMANU: number;


  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

}
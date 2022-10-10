import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class MonAn {
  @PrimaryGeneratedColumn()
  public maMonAn: number;

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
  
  @Column({ type: 'varchar'})
  public maLoaiMonAn: number;


  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

}
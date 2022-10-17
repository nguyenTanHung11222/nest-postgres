import { ChiTietHoaDon } from "src/api/chi-tiet-hoa-don/entities/chi-tiet-hoa-don.entity";
import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export abstract class ThucDon {
    @PrimaryGeneratedColumn()
    public maThucDon: number;
  
    @OneToMany(() => ChiTietHoaDon, (cthd) => cthd.thucDon)
    chiTietHoaDons: ChiTietHoaDon[];


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

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt!: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt!: Date;

}
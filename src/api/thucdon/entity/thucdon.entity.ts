import { ChiTietHoaDon } from "src/api/chi-tiet-hoa-don/entities/chi-tiet-hoa-don.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class ThucDon {

    @PrimaryGeneratedColumn()
    public maThucDon: number;
  
    @OneToMany(() => ChiTietHoaDon, (cthd) => cthd.thucDon)
    @JoinColumn({name: "cthd_id"})
    chiTietHoaDons: ChiTietHoaDon;


    @Column({ type: 'real'})
    public DonGia: number;
  
    @Column({ type: 'varchar', length: 120 })
    public TenThucDon: string;
  
    @Column({ type: 'varchar', length: 120 })
    public MoTa: string;
  
    @Column({ type: 'varchar', length: 30 })
    public TrangThai: string;
  
    @Column({ type: 'varchar', length: 225 })
    public HinhAnh: string;
  
    @Column({ type: 'int'})
    public soLuongTon: number;

    @Column({ type: 'varchar', length: 225 })
    public maLoaiSanPham: string;

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt!: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt!: Date;

}
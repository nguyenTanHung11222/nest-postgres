import { ThucDon } from 'src/common/thucdon/thucdon.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class NuocUong extends ThucDon {

  @Column({ type: 'varchar'})
  public donViTinh: string;

  @Column({ type: 'int'})
  public maLoaiNuocUong: number;
}
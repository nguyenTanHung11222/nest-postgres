import { ThucDon } from 'src/api/thucdon/entity/thucdon.entity';
import {  Column, ChildEntity } from 'typeorm';

@ChildEntity()
export class NuocUong extends ThucDon {

  @Column({ type: 'varchar'})
  public donViTinh: string;


}
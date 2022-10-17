import { ThucDon } from 'src/api/thucdon/entity/thucdon.entity';
import {
  ChildEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ChildEntity()
export class MonAn extends ThucDon{

}

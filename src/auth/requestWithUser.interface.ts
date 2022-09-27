import { Request } from 'express';
import {User} from '../api/nhanVien/entity/nhanVien.entity';
 
interface RequestWithUser extends Request {
  user: User;
}
 
export default RequestWithUser;
import { HttpException, HttpStatus } from "@nestjs/common";
import { UserService } from "src/api/nhanVien/nhanVien.service";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "src/api/nhanVien/dto/nhanVien.dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}
   
  public async register(registrationData: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(registrationData.MatKhau, 10);
    try {
      const createdUser = await this.userService.createUser({
        ...registrationData,
        MatKhau: hashedPassword
      });
      createdUser.MatKhau = undefined;
      return createdUser;
    } catch (error) {
      if (error?.code === 23505) {
        throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  // (...)
  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.userService.getByEmail(email);
      await this.verifyPassword(plainTextPassword, user.MatKhau);
      user.MatKhau = undefined;
      return user;
    } catch (error) {
        throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
      }
    }
       
  private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }
  public getCookieWithJwtToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
  }  
  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
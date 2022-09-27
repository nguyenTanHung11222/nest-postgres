import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
  type: String,
  description: 'Thuộc tính phải có',
  })
  public TenNguoiDung: string;
  @ApiProperty({
  type: String,
  description: 'Thuộc tính phải có',
  })
  public email: string;

  @ApiProperty({
  type: String,
  description: 'Thuộc tính phải có',
  })
  public MatKhau: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public CMT: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public GioiTinh: string;  

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public DiaChi: string;
    @ApiProperty({
      type: Date,
      description: 'Thuộc tính phải có',
      })
      public NgaySinh: Date;
  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public SDT: string;
    @ApiProperty({
      type: String,
      description: 'Thuộc tính phải có',
      })
      public ChucVu: string;
}
export class UpdateUserDto {

  public id: number;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  public email: string;
}
export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  public password: string;
}
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateKhachHangDto {
  @ApiProperty({
  type: String,
  description: 'Thuộc tính phải có',
  })
  public tenKhachHang: string;
  @ApiProperty({
  type: String,
  description: 'Thuộc tính phải có',
  })
  public email: string;

  // @ApiProperty({
  // type: String,
  // description: 'Thuộc tính phải có',
  // })
  // public MatKhau: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public CMT: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public gioiTinh: string;  

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public diaChi: string;
    @ApiProperty({
      type: Date,
      description: 'Thuộc tính phải có',
      })
      public ngaySinh: Date;
  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public SDT: string;
}
export class UpdateUserDto extends PartialType(CreateKhachHangDto){
}
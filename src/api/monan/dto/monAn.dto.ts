import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMonAnDto {
  @ApiProperty({
  type: Number,
  description: 'Thuộc tính phải có',
  })
  public DonGia: number;
  @ApiProperty({
  type: String,
  description: 'Thuộc tính phải có',
  })
  public TenMonAn: string;

  @ApiProperty({
  type: String,
  description: 'Thuộc tính phải có',
  })
  public MoTa: string;

  @ApiProperty({
  type: String,
  description: 'Thuộc tính phải có',
  })
  public TrangThai: string;  

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public HinhAnh: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
    })
    public maLoaiMonAn: number;

}
export class UpdateMonAnDto {

}

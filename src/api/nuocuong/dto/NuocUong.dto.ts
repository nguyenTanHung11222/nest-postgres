import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateNuocUongDto {
  @ApiProperty({
    type: Number,
    description: 'Thuộc tính phải có',
  })
  public DonGia: number;
  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public TenNuocUong: string;

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
    type: Number,
    description: 'Thuộc tính phải có',
  })
  public soLuongTon: number;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public donViTinh: string;

  @ApiProperty({
    type: Number,
    description: 'Thuộc tính phải có',
  })
  public maLoaiNuocUong: number;
}
export class UpdateNuocUongDto {}

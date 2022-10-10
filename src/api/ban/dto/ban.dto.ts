import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
export class CreateBanDto {
  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public tenBan: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public soLuongToiDa: number;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public TrangThai: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public maKhuVuc: string;


}
export class UpdateBanDto extends PartialType(CreateBanDto ){}

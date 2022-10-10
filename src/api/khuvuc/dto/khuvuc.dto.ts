import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
export class CreateKhuVucDto {
  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public tenKhuVuc: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public moTa: string;

  @ApiProperty({
    type: String,
    description: 'Thuộc tính phải có',
  })
  public hinhAnh: string;


}
export class UpdateKhuVucDto extends PartialType(CreateKhuVucDto ){}

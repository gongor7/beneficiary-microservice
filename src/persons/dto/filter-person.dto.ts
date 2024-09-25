import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

export class FilteredPaginationDto extends PaginationDto {
  @IsOptional()
  @IsString()
  filter?: string;
}
import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber, MaxLength, IsDefined } from 'class-validator';
import { TipoFonteDto } from '../../tipoFonte/dto';

export class CreateRSSDto {
  @ApiModelProperty({
    description: 'Nome da fonte RSS',
    type: 'string',
  })
  @IsDefined()
  @IsString()
  @MaxLength(240)
  nome: string;

  @ApiModelProperty({
    description: 'Url do RSS da fonte',
    type: 'string',
  })
  @IsDefined()
  @IsString()
  @MaxLength(240)
  url: string;

  @ApiModelProperty({
    description: 'Tipo da Fonte',
    type: () => TipoFonteDto,
  })
  @IsDefined()
  tipoFonte: TipoFonteDto;
}

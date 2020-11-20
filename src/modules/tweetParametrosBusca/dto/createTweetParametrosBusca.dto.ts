import { ApiModelProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DescritorDto } from '../../descritor/dto/index';

export class CreateTweetParametrosBuscaDto {
  @ApiModelProperty({
    description: 'Data em que se inicia as buscas, do termo, no Twitter.',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  dataInicioBusca: string;

  @ApiModelProperty({
    description: 'Termo a ser pesquisado no Twitter.',
    type: () => DescritorDto,
  })
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  descritor: DescritorDto;
}

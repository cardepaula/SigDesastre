import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { TweetsService } from './tweets.service';
import { TweetsDto, CreateTweetsDto, UpdateTweetsDto } from './dto';
import { Tweets } from '../../database/entities/tweets.entity';
import { CrudController, Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: TweetsDto,
  },
  dto: {
    create: CreateTweetsDto,
    update: UpdateTweetsDto,
  },
})
@ApiUseTags('Tweets')
@Controller('tweets')
export class TweetsController implements CrudController<Tweets> {
  constructor(public service: TweetsService) {}

  get base(): CrudController<Tweets> {
    return this;
  }
}

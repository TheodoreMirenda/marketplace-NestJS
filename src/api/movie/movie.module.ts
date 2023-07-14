import { Module } from '@nestjs/common';
import { MovieResolver } from './movie.resolver';

import { MovieService } from './movie.service';
import { FilterService } from 'src/shared/modules/filter/filter.service';

@Module({
  imports: [],
  providers: [MovieResolver, MovieService, FilterService],
  exports: [MovieResolver, MovieService, FilterService],
})
export class MovieModule {}

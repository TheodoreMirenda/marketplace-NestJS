import { Module } from '@nestjs/common';
import { GenreResolver } from './genre.controller';

import { GenreService } from './genre.service';

@Module({
  imports: [],
  providers: [GenreResolver, GenreService],
  exports: [GenreResolver, GenreService],
})
export class GenreModule {}

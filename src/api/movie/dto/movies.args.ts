import { IsOptional, Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from '@nestjs/graphql';

import { MovieWhereInput } from './movie-where.input';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { MovieOrderByInput } from './movie-order-by.input';

import { SearchInput } from 'src/shared/util';

@ArgsType()
export class MoviesArgs {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  @Min(0)
  skip?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  @Min(1)
  @Max(50)
  take?: number;

  @IsOptional()
  @Field(() => MovieWhereUniqueInput, { nullable: true })
  cursor?: MovieWhereUniqueInput;

  @IsOptional()
  @Field(() => MovieOrderByInput, { nullable: true })
  orderBy?: MovieOrderByInput;

  @IsOptional()
  @Field(() => MovieWhereInput, { nullable: true })
  where?: MovieWhereInput;

  @IsOptional()
  @Field(() => SearchInput, { nullable: true })
  search?: SearchInput;
}

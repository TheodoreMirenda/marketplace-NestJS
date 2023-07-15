import { Role } from '@prisma/client';

import { UseGuards } from '@nestjs/common';

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';

import { Roles } from 'src/shared/decorators/roles';

import { RolesGuard, JwtAuthGuard } from 'src/shared/auth/guards';
import { Genre, GenreSelect } from './model';
import { GenreCreateInput } from './dto';
import { GenreService } from './genre.service';

@Resolver(() => Genre)
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Query(() => [Genre])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  public async genres(
    @GraphQLFields() { fields }: IGraphQLFields<GenreSelect>,
  ): Promise<Genre[]> {
    return this.genreService.findAll(fields);
  }

  @Mutation(() => Genre)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  public async createGenre(
    @Args('data') data: GenreCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<GenreSelect>,
  ): Promise<Genre> {
    return this.genreService.create(data, fields);
  }
}

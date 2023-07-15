import { Role } from '@prisma/client';

import { UseGuards } from '@nestjs/common';

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';

import { Roles } from 'src/shared/decorators/roles';

import { RolesGuard, JwtAuthGuard } from 'src/shared/auth/guards';
import { Movie, MovieSelect } from './model';
import { MovieCreateInput, MoviesArgs } from './dto';
import { MovieService } from './movie.service';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => [Movie])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  public async movies(
    @Args() args: MoviesArgs,
    @GraphQLFields() { fields }: IGraphQLFields<MovieSelect>,
  ): Promise<Movie[]> {
    return this.movieService.findAll(args, fields);
  }

  @Mutation(() => Movie)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  public async createMovie(
    @Args('data') data: MovieCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<MovieSelect>,
  ): Promise<Movie> {
    return this.movieService.create(data, fields);
  }
}

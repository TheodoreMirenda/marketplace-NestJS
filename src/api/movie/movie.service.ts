import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { Movie, MovieSelect } from './model';

import { MovieCreateInput, MoviesArgs } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';
import { FilterService } from 'src/shared/modules/filter/filter.service';

@Injectable()
export class MovieService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly filterService: FilterService,
  ) {}

  public async findAll(
    args: MoviesArgs,
    { select }: MovieSelect,
  ): Promise<Movie[]> {
    const { search, ...filters } = args || {};

    const exercises = await this.prismaService.movie.findMany({
      skip: filters.skip,
      cursor: filters.cursor,
      take: filters.take,
      orderBy: filters.orderBy,
      select,
      where: {
        ...args.where,
        AND: this.filterService.getMovieSearchFilter(search),
      },
    });
    return exercises;
  }

  public async create(
    data: MovieCreateInput,
    { select }: MovieSelect,
  ): Promise<Movie> {
    return this.prismaService.movie.create({
      data: {
        name: data.name,
        description: data.description,
        images: data.images,
        uuid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        genre: {
          connect: {
            id: data.genreId,
          },
        },
      },
      select,
    });
  }
}

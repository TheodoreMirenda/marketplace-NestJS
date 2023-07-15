import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { Genre, GenreSelect } from './model';

import { GenreCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';

@Injectable()
export class GenreService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll({ select }: GenreSelect): Promise<Genre[]> {
    return this.prismaService.genre.findMany({
      select,
    });
  }

  public async create(
    data: GenreCreateInput,
    { select }: GenreSelect,
  ): Promise<Genre> {
    return this.prismaService.genre.create({
      data: {
        ...data,
        uuid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      select,
    });
  }
}

import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { Category, CategorySelect } from './model';

import { CategoryArgs, CategoryCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: CategoryArgs,
    { select }: CategorySelect,
  ): Promise<Category> {
    return this.prismaService.category.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: CategoryCreateInput,
    { select }: CategorySelect,
  ): Promise<Category> {
    return this.prismaService.category.create({
      data:{
        ...data,
        uuid: uuidv4(),
      },
      select,
    });
  }
}

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

  public async findMany(
    { select }: CategorySelect,
  ): Promise<Category[]> {
    return this.prismaService.category.findMany({
      select,
    });
  }

  public async create(
    data: CategoryCreateInput,
    { select }: CategorySelect,
  ): Promise<Category> {
    return this.prismaService.category.create({
      data,
      select,
    });
  }
}

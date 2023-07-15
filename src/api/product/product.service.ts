import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { Product, ProductSelect } from './model';

import { ProductArgs, ProductCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: ProductArgs,
    { select }: ProductSelect,
  ): Promise<Product> {
    return this.prismaService.user.findUnique({
      where,
      select,
    });
  }

  public async findProductPassword({ where }: ProductArgs) {
    const user = await this.prismaService.user.findUnique({
      where,
    });
    return user ? user.password : null;
  }

  public async create(
    data: ProductCreateInput,
    { select }: ProductSelect,
  ): Promise<Product> {
    return this.prismaService.user.create({
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

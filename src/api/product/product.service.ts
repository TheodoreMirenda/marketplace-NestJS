import { Injectable } from '@nestjs/common';
import { Product, ProductSelect } from './model';
import { ProductArgs, ProductCreateInput } from './dto';
import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';
import { ProductArgsOther } from './dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: ProductArgs,
    { select }: ProductSelect,
  ): Promise<Product> {
    return this.prismaService.product.findUnique({
      where,
      select,
    });
  }

  public async findMany(
    { where }: ProductArgsOther,
    { select }: ProductSelect,
  ): Promise<Product[]> {
    return this.prismaService.product.findMany({
      where,
      select,
    });
  }

  public async findAll(
    { select }: ProductSelect,
  ): Promise<Product[]> {
    return this.prismaService.product.findMany({
      select,
    });
  }

  public async create(
    data: ProductCreateInput,
    { select }: ProductSelect,
  ): Promise<Product> {
    return this.prismaService.product.create({
      data,
      select,
    });
  }
}

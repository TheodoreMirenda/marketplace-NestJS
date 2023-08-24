import { ArgsType, Field } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { IsOptional } from 'class-validator';
import { ProductOrderByWithRelationInput } from './product-order-by.input';

@ArgsType()
export class ProductsArgs {

  @IsOptional()
  @Field(() => ProductWhereInput, { nullable: true })
  where?: ProductWhereInput;

  @IsOptional()
  @Field(() => ProductOrderByWithRelationInput, { nullable: true })
  orderBy?: ProductOrderByWithRelationInput;
}
import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Category } from 'src/api/category/model/category.model';

@InputType()
export class ProductWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
  @Field(() => String, { nullable: true })
  uuid: string;
  @Field(() => Number, { nullable: true })
  vendorProductId: number;
}
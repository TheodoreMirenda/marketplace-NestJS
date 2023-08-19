import { InputType, Field } from '@nestjs/graphql';
import { Category } from 'src/api/category/model/category.model';

@InputType()
export class ProductWhereUniqueInput {
  @Field(() => Number)
  id: number;
  @Field(() => String, { nullable: true })
  uuid: string;
  @Field(() => Number, { nullable: true })
  vendorProductId: number;
}

@InputType()
export class ProductWhereInput {
  @Field(() => Number, { nullable: true })
  categoryId?: number;
}
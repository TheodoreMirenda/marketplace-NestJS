import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ProductOrderWhereUniqueInput {
  @Field(() => Number)
  productId: number; 
  
  @Field(() => Number)
  orderId: number;
}
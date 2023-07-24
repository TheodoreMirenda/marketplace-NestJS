import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Order } from 'src/api/order/model/order.model';

@ObjectType()
export class Category {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [Order], { nullable: true })
  orders?: Order[];
}
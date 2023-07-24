import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from 'src/api/product/model/product.model';
import { Order } from 'src/api/order/model/order.model';

@ObjectType()
export class ProductOrder {
  @Field(() => Number, { nullable: true })
  productId?: number;
  @Field(() => Number, { nullable: true })
  orderId?: number;
  @Field(() => Number, { nullable: true })
  quantity?: number;
  
  @Field(() => Product, { nullable: true })
  product?: Product;
  @Field(() => Order, { nullable: true })
  order?: Order;
}

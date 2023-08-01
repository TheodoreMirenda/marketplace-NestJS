import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Category} from 'src/api/category/model/category.model';
import { Vendor } from 'src/api/vendor/model/vendor.model';
import { Product } from 'src/api/product/model/product.model';

@ObjectType()
export class VendorProduct {
  @Field(() => Number, { nullable: true })
  id?: number;
  @Field (() => String, { nullable: true })
  uuid?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Number, { nullable: true })
  quantity?: number;
  @Field(() => Number, { nullable: true })
  categoryId?: number;
  @Field(() => Number, { nullable: true })
  vendorId?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Category, { nullable: true })
  category?: Category;
  @Field(() => Vendor, { nullable: true })
  vendor?: Vendor;
  @Field(() => Product, { nullable: true })
  product?: Product;
}
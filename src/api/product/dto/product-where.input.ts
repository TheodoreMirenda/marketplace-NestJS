import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';


@InputType()
export class ProductWhereInput {
  @IsOptional()
  @Field(() => Number, { nullable: true })
  categoryId?: number;
}
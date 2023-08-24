import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { OrderByArg } from 'src/shared/util';

@InputType()
export class ProductOrderByWithRelationInput {

  @IsOptional()
  @Field(() => OrderByArg, { nullable: true })
  price?: OrderByArg;

  @IsOptional()
  @Field(() => OrderByArg, { nullable: true })
  name?: OrderByArg;
}
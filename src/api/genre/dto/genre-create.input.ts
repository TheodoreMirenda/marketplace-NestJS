import { Field, InputType } from '@nestjs/graphql';

import { MaxLength } from 'class-validator';

@InputType()
export class GenreCreateInput {
  @MaxLength(60)
  @Field(() => String)
  name: string;
}

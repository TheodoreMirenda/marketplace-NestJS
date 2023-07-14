import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MovieCreateInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String])
  images: string[];

  @Field(() => Number)
  genreId: number;
}

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User, UserSelect } from './model';
import { UserArgs, UserCreateInput } from './dto';
import { UserService } from './user.service';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';
import { UserUpdateInput } from './dto/user-update.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User,{nullable:true})
  public async user(
    @Args() args: UserArgs,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User | null> {
    return this.userService.findOne(args, fields);
  }

  @Mutation(() => User)
  public async createUser(
    @Args('data') data: UserCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User> {
    return this.userService.create(data, fields);
  }

  @Mutation(() => User)
  public async userUpdate(
    @Args() args: UserArgs,
    @Args('data') data: UserUpdateInput,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User> {
    return this.userService.update(args, data, fields);
  }
}

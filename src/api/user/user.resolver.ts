import { Role } from '@prisma/client';

import { UseGuards } from '@nestjs/common';

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { User, UserSelect } from './model';

import { UserArgs, UserCreateInput } from './dto';

import { UserService } from './user.service';

import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';

import { Roles } from 'src/shared/decorators/roles';

import { RolesGuard, JwtAuthGuard } from 'src/shared/auth/guards';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(JwtAuthGuard)
  @Query(() => User,{nullable:true})
  public async user(
    @Args() args: UserArgs,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User | null> {
    return this.userService.findOne(args, fields);
  }

  @Mutation(() => User)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  public async createUser(
    @Args('data') data: UserCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User> {
    return this.userService.create(data, fields);
  }
}

import { Role } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Vendor, VendorSelect } from './model';
import { VendorArgs, VendorCreateInput } from './dto';
import { VendorService } from './vendor.service';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';
import { Roles } from 'src/shared/decorators/roles';
import { RolesGuard, JwtAuthGuard } from 'src/shared/auth/guards';

@Resolver(() => Vendor)
export class VendorResolver {
  constructor(private readonly vendorService: VendorService) {}

  // @UseGuards(JwtAuthGuard)
  // @Query(() => Vendor,{nullable:true})
  public async vendor(
    @Args() args: VendorArgs,
    @GraphQLFields() { fields }: IGraphQLFields<VendorSelect>,
  ): Promise<Vendor | null> {
    return this.vendorService.findOne(args, fields);
  }

  @Mutation(() => Vendor)
  @UseGuards(JwtAuthGuard)
  // @Roles(Role.ADMIN)
  public async createVendor(
    @Args('data') data: VendorCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<VendorSelect>,
  ): Promise<Vendor> {
    return this.vendorService.create(data, fields);
  }
}

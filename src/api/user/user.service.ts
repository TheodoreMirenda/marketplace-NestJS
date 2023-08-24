import { Injectable } from '@nestjs/common';
import { User, UserSelect } from './model';
import { UserArgs, UserCreateInput } from './dto';
import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';
import { UserUpdateInput } from './dto/user-update.input';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: UserArgs,
    { select }: UserSelect,
  ): Promise<User> {
    return this.prismaService.user.findUnique({
      where,
      select,
    });
  }

  public async findUserPassword({ where }: UserArgs) {
    const user = await this.prismaService.user.findUnique({
      where,
    });
    return user ? user.password : null;
  }

  public async create(
    data: UserCreateInput,
    { select }: UserSelect,
  ): Promise<User> {
    return this.prismaService.user.create({
      data,
      select,
    });
  }

  public async update(
    { where }: UserArgs,
    data : UserUpdateInput,
    { select }: UserSelect,
    ): Promise<User> {
    return this.prismaService.user.update({
      where,
      data,
      select,
    });
  }

  public async findUserRole({ where }: UserArgs) {
    const user = await this.prismaService.user.findUnique({
      where,
    });
    return user ? user.type : null;
  }
}

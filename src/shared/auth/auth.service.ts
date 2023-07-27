import * as bcrypt from 'bcrypt';

import { Role } from '@prisma/client';

import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { SignUpInput } from './dto';

import { UserSelect } from 'src/api/user/model';

import { User } from 'src/api/user/model/user.model';

import { UserService } from 'src/api/user/user.service';

// import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    try {
      const user = await this.userService.findOne(
        {
          where: {
            email,
          },
        },
        {
          select: {
            uuid: true,
            email: true,
            type: true,
            username: true,
            firstName: true,
            updatedAt: true,
            createdAt: true,
            lastName: true,
            avatar: true,
          },
        },
      );

      const userPassword = await this.userService.findUserPassword({
        where: { email },
      });

      const valid = await bcrypt.compare(password, userPassword);

      return user && valid ? user : null;
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string) {
    const user = await this.userService.findOne(
      {
        where: {
          email
        },
      },
      {
        select: {
          uuid: true,
          email: true,
          type: true,
          username: true,
          firstName: true,
          updatedAt: true,
          createdAt: true,
          lastName: true,
          avatar: true,
        },
      },
    );
    const userPassword = await this.userService.findUserPassword({
      where: {
        email
      },
    });
    if (userPassword!= password) {
      throw new Error('Incorrect password!');
    }
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user.uuid,
        role: user.type,
        expiresIn: 60 * 5,
      }),
      expiresAt: new Date(Date.now() + 60 * 5),
      user,
    };
  }

  async signup(signUpInput: SignUpInput, select: UserSelect) {
    const userPassword = await this.userService.findUserPassword({
      where: {
        email: signUpInput.email,
      },
    });

    if (userPassword) {
      throw new Error('User already exists!');
    }

    const password = await bcrypt.hash(signUpInput.password, 10);

    return this.userService.create(
      {
        ...signUpInput,
        type: Role.USER,
        password,
      },
      {
        ...select,
      },
    );
  }
}

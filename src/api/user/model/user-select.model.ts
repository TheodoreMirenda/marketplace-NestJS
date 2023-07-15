interface UserPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  username?: boolean;
  email?: boolean;

  type?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  
  createdAt?: boolean;
  updatedAt?: boolean;

  passwordHash?: boolean;
  avatar?: boolean;
  orders?: boolean;
}

export interface UserSelect {
  select?: UserPrismaSelect;
}

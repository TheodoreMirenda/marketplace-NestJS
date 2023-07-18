interface UserPrismaSelect {
  uuid?: boolean;
  username?: boolean;
  email?: boolean;

  type?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  avatar?: boolean;

  createdAt?: boolean;
  updatedAt?: boolean;
  orders?: boolean;
  vendor?: boolean;
}

export interface UserSelect {
  select?: UserPrismaSelect;
}

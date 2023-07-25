interface OrderPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  userId?: boolean;

  createdAt?: boolean;
  updatedAt?: boolean;

  orderStatus?: boolean;
  user?: boolean;
  productOrders?: boolean;
}

export interface OrderSelect {
  select?: OrderPrismaSelect;
}

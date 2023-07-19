interface VendorPrismaSelect {
  uuid?: boolean;
  userId?: boolean;
  name?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  user?: boolean;
  vendorProducts?: boolean;
}

export interface VendorSelect {
  select?: VendorPrismaSelect;
}

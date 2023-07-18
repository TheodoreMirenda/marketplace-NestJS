interface VendorPrismaSelect {
  uuid?: boolean;
  userId?: boolean;
  vendorName?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  user?: boolean;
}

export interface VendorSelect {
  select?: VendorPrismaSelect;
}

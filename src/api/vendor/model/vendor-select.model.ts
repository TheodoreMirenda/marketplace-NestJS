interface VendorPrismaSelect {
  id?: boolean;
  uuid?: boolean;

  vendorName?: boolean;
  email?: boolean;
  avatar?: boolean;
  passwordHash?: boolean;

  createdAt?: boolean;
  updatedAt?: boolean;
  type?: boolean;
  vendor_product?: boolean;
}

export interface VendorSelect {
  select?: VendorPrismaSelect;
}

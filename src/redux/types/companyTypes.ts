export interface PackageState {
  id: string;
  name: string;
  price: number;
  duration: number;
  lines: string[];
}

export interface AddonState {
  id: string;
  name: string;
  price: number;
  duration: number;
}

export interface CompanyState {
  id: string;
  name: string;
  desc: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  packages: Array<PackageState>;
  addons: Array<AddonState>;
}

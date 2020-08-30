import { CompanyState, PackageState, AddonState } from "../redux/types";

export const defaultPackages: Array<PackageState> = [
  {
    id: "xac14768-ab4b-43d1-a18e-2fb12a75eae2",
    name: "Ultimate",
    price: 49.99,
    duration: 75,
    lines: [
      "Exterior Hand Wash",
      "Hand Dry",
      "Wheel Shine",
      "Hand Wax",
      "Rain-X",
    ],
  },
  {
    id: "xbc14768-ab4b-43d1-a18e-2fb12a75eae2",
    name: "Supreme",
    price: 39.99,
    duration: 60,
    lines: ["Exterior Hand Wash", "Hand Dry", "Wheel Shine", "Hand Wax"],
  },
  {
    id: "xcc14768-ab4b-43d1-a18e-2fb12a75eae2",
    name: "Basic",
    price: 29.99,
    duration: 45,
    lines: ["Exterior Hand Wash", "Hand Dry", "Wheel Shine"],
  },
  {
    id: "xdc14768-ab4b-43d1-a18e-2fb12a75eae2",
    name: "Deluxe",
    price: 19.99,
    duration: 30,
    lines: ["Exterior Hand Wash", "Hand Dry"],
  },
];

export const defaultAddons: Array<AddonState> = [
  {
    id: "xac14768-ab4b-43d1-a18e-2fb10a75eae2",
    name: "Dashboard Conditioner",
    price: 9.99,
    duration: 10,
  },
  {
    id: "xbc14768-ab4b-43d1-a18e-2f412a75eae2",
    name: "Fragrance",
    price: 2.99,
    duration: 5,
  },
];

export const companies: Array<CompanyState> = [
  {
    id: "bcc14768-ab4b-43d1-a18e-2fb12a75eae2",
    name: "Dream Wash",
    desc:
      "The Dream Car Wash is one of the most reliable car wash and detailing businesses in San Antonio, TX",
    street: "500 Trumbal",
    city: "Live Oak",
    state: "Texas",
    zip: "78233",
    country: "USA",
    phone: "2104444444",
    email: "support@dreamwash.com",
    packages: defaultPackages,
    addons: defaultAddons,
  },
  {
    id: "c1a673cf-f667-4c08-a909-a5b3b51addc8",
    name: "Jet Wash",
    desc:
      "The Jet Car Wash is one of the most reliable car wash and detailing businesses in San Antonio, TX",
    street: "500 Trumbal",
    city: "Live Oak",
    state: "Texas",
    zip: "78233",
    country: "USA",
    phone: "2104444444",
    email: "support@jetwash.com",
    packages: defaultPackages,
    addons: defaultAddons,
  },
  {
    id: "46e186dd-69b8-49bc-8a9f-93f353279e3d",
    name: "Fast Wash",
    desc:
      "The Fast Car Wash is one of the most reliable car wash and detailing businesses in San Antonio, TX",
    street: "500 Trumbal",
    city: "Live Oak",
    state: "Texas",
    zip: "78233",
    country: "USA",
    phone: "2104444444",
    email: "support@fastwash.com",
    packages: defaultPackages,
    addons: defaultAddons,
  },
  {
    id: "16e186dd-69b8-49bc-8a9f-93f353279e3d",
    name: "New Dream Wash",
    desc:
      "The New Dream Car Wash is one of the most reliable car wash and detailing businesses in San Antonio, TX",
    street: "500 Trumbal",
    city: "Live Oak",
    state: "Texas",
    zip: "78233",
    country: "USA",
    phone: "2104444444",
    email: "support@dreamwash.com",
    packages: defaultPackages,
    addons: defaultAddons,
  },
  {
    id: "26e186dd-69b8-49bc-8a9f-93f353279e3d",
    name: "New Jet Wash",
    desc:
      "The New Jet Car Wash is one of the most reliable car wash and detailing businesses in San Antonio, TX",
    street: "500 Trumbal",
    city: "Live Oak",
    state: "Texas",
    zip: "78233",
    country: "USA",
    phone: "2104444444",
    email: "support@jetwash.com",
    packages: defaultPackages,
    addons: defaultAddons,
  },
  {
    id: "36e186dd-69b8-49bc-8a9f-93f353279e3d",
    name: "New Fast Wash",
    desc:
      "The New Fast Car Wash is one of the most reliable car wash and detailing businesses in San Antonio, TX",
    street: "500 Trumbal",
    city: "Live Oak",
    state: "Texas",
    zip: "78233",
    country: "USA",
    phone: "2104444444",
    email: "support@fastwash.com",
    packages: defaultPackages,
    addons: defaultAddons,
  },
];

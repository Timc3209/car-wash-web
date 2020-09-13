import {
  CompanyState,
  PackageState,
  AddonState,
  TimeSlotState,
} from "../redux/types";

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

export const truckPackages: Array<PackageState> = [
  {
    id: "xac14768-ab4b-43d1-a18a-2fb12a75eae2",
    name: "Ultimate",
    price: 59.99,
    duration: 90,
    lines: [
      "Exterior Hand Wash",
      "Hand Dry",
      "Wheel Shine",
      "Hand Wax",
      "Rain-X",
    ],
  },
  {
    id: "xbc14768-ab4b-43d1-a18b-2fb12a75eae2",
    name: "Supreme",
    price: 49.99,
    duration: 75,
    lines: ["Exterior Hand Wash", "Hand Dry", "Wheel Shine", "Hand Wax"],
  },
  {
    id: "xcc14768-ab4b-43d1-a18c-2fb12a75eae2",
    name: "Basic",
    price: 39.99,
    duration: 60,
    lines: ["Exterior Hand Wash", "Hand Dry", "Wheel Shine"],
  },
  {
    id: "xdc14768-ab4b-43d1-a18d-2fb12a75eae2",
    name: "Deluxe",
    price: 29.99,
    duration: 45,
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

export const defaultTimeSlots: Array<TimeSlotState> = [
  {
    id: "hac14768-ab4b-43d1-a18e-2fb10a75eae2",
    name: "8AM-10AM",
    from: "8:00",
    to: "10:00",
    disabled: false,
    type: "weekday",
  },
  {
    id: "hbc14768-ab4b-43d1-a18e-2fb10a75eae2",
    name: "10AM-12PM",
    from: "10:00",
    to: "12:00",
    disabled: false,
    type: "weekday",
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
    packagesTruck: truckPackages,
    addons: defaultAddons,
    timeSlots: defaultTimeSlots,
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
    packagesTruck: truckPackages,
    addons: defaultAddons,
    timeSlots: defaultTimeSlots,
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
    packagesTruck: truckPackages,
    addons: defaultAddons,
    timeSlots: defaultTimeSlots,
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
    packagesTruck: truckPackages,
    addons: defaultAddons,
    timeSlots: defaultTimeSlots,
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
    packagesTruck: truckPackages,
    addons: defaultAddons,
    timeSlots: defaultTimeSlots,
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
    packagesTruck: truckPackages,
    addons: defaultAddons,
    timeSlots: defaultTimeSlots,
  },
];

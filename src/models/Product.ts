export enum ProductCategory {
  BATTERY = "BATTERY",
  SOLAR_PANEL = "SOLAR_PANEL",
  INVERTER = "INVERTER",
  PROTECTION_DEVICE = "PROTECTION_DEVICE",
  ACCESSORY = "ACCESSORY",
}

export interface Product {
  id: string; // Or number
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  specifications?: Record<string, any>; // e.g., { capacity: "5kWh", voltage: "48V" }
}

// Optional: Specific product types if they have vastly different fields
// export interface Battery extends Product {
//   category: ProductCategory.BATTERY;
//   capacityWh: number;
//   voltage: number;
// }

// export interface SolarPanel extends Product {
//   category: ProductCategory.SOLAR_PANEL;
//   wattage: number;
//   panelType: string; // Monocrystalline, Polycrystalline
// }

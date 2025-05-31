import { ProductCategory } from './Product'; // Added import

export interface Installer {
  id: string; // Or number
  name: string;
  email: string;
  phoneNumber?: string;
  areasOfOperation?: string[]; // e.g., ["City A", "Region B"]
  specializations?: ProductCategory[]; // e.g., [ProductCategory.SOLAR_PANEL, ProductCategory.BATTERY]
  availability?: string; // Could be a more complex schedule object
  rating?: number; // Average rating from users
}

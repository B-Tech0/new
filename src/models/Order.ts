import { Product } from './Product';
import { User } from './User';
import { Installer } from './Installer';

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  AWAITING_INSTALLATION = "AWAITING_INSTALLATION",
  INSTALLATION_SCHEDULED = "INSTALLATION_SCHEDULED",
  SHIPPED = "SHIPPED", // For product-only orders
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface OrderItem {
  productId: string; // or Product
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string; // Or number
  userId: string; // or User
  items: OrderItem[];
  totalAmount: number;
  orderDate: Date;
  status: OrderStatus;
  shippingAddress?: string; // If applicable
  installerId?: string; // or Installer
  installationDate?: Date;
  // To track transparency in sourcing/installation
  sourcingProcessUpdates?: string[];
  installationProcessUpdates?: string[];
}

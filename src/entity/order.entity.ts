import { OrderStatus } from '../enum/order-status.enum';
import { OrderProductEntity } from './order-product.entity';

export class OrderEntity {
  constructor(
    public id: string,
    public total: number,
    public status: OrderStatus,
    public placedOn: Date,
    public orderProducts: OrderProductEntity[],
  ) {
  }
}
import { OrderStatus } from '../enum/order-status.enum';

export class UpdateOrderStatusDto {
  constructor(
    public id: string,
    public status: OrderStatus,
  ) {
  }
}
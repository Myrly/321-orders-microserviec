import { OrderProductEntity } from '../entity/order-product.entity';

export class CreateOrderDto {
  constructor(
    public orderProducts: OrderProductEntity[],
  ) {
  }
}
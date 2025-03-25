import { OrderProductEntity } from '../entity/order-product.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {

  @ApiProperty({
    description: 'List of OrderProducts',
    example: [
      {
        "productId": 4,
        "amount": 2
      },
      {
        "productId": 3,
        "amount": 1
      }
    ],
  })
  public orderProducts: OrderProductEntity[]

}
import { OrderStatus } from '../enum/order-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderStatusDto {
  @ApiProperty({
    description: 'Id of order',
    example: 'e198d7c2-881c-49d8-hui3-bd63345d2d34'
  })
  public id: string;

  @ApiProperty({
    description: 'New status of the order',
    example: "dispatched",
    enum: OrderStatus,
  })
  public status: OrderStatus;
}
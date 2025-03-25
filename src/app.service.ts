import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';
import { OrderProductEntity } from './entity/order-product.entity';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderStatus } from './enum/order-status.enum';
import { OrderEntity } from './entity/order.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {

  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const id: string = uuidv4();
    let total: number = this.calculateOrderProductsTotalPrice(createOrderDto.orderProducts);
    const status: OrderStatus = OrderStatus.waiting;
    const placedOn: Date = new Date(Date.now());
    let order: OrderEntity = new OrderEntity(
      id,
      total,
      status,
      placedOn,
      createOrderDto.orderProducts
    );
    const createdOrder = new this.orderModel(order);
    return createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().select('-_id').exec();
  }

  async findOne(id: string) {
    return this.orderModel.findOne({ id: id }).select('-_id').exec();
  }

  private calculateOrderProductsTotalPrice(orderProducts: OrderProductEntity[]): number {
    /*
      This function is implemented in a "weird" way. Basically, this application is
      meant to be implemented using microservices. The consequence is that products
      shouldn't be managed by this orders service. The thing is, it still needs to
      access to a product's price. In a real world implementation, this service would
      call the product service directly. But since the exercise was only about doing
      one service, and not the other one, I use the "product_id" field instead.

      You would use something like this instead, but the rest of the logic stays the same.
      let productPrice = httpService.get(productPriceUrl?id=product_id);
     */

    return orderProducts
      .flatMap(orderProduct => orderProduct.product_id)
      .reduce((acc, currentValue) => acc += currentValue, 0);
  }

}

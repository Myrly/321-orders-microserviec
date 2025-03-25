import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { OrderProductEntity } from '../entity/order-product.entity';
import { OrderStatus } from '../enum/order-status.enum';

export type OrderDocument = HydratedDocument<Order>;

@Schema({
  versionKey: false,
})
export class Order {

  @Prop({ required: true, unique: true, type: mongoose.Types.ObjectId })
  id: string;

  @Prop({ required: true })
  total: number;

  @Prop({ required: true })
  status: OrderStatus;

  @Prop({ required: true })
  placedOn: Date;

  @Prop([OrderProductEntity])
  orderProducts: OrderProductEntity[];

}

export const OrderSchema = SchemaFactory.createForClass(Order);
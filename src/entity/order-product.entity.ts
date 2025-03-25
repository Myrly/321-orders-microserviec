export class OrderProductEntity {
  constructor(
    public id: string,
    public product_id: number, // the ID of product is a number instead of string ids used elsewhere because of the product situation mentioned in the README
    public amount: number,
  ) {
  }
}
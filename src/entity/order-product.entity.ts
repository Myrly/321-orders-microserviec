export class OrderProductEntity {
  constructor(
    public productId: number, // the ID of product is a number instead of string ids used elsewhere because of the product situation mentioned in the README
    public amount: number,
  ) {
  }
}
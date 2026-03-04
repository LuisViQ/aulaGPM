import Realm from "realm";

export class Warehouse extends Realm.Object<Warehouse> {
  _id!: Realm.BSON.ObjectId;
  productName!: string;
  productQuantity?: number;
  productOwner!: string;
  static generate(
    productName: string,
    productQuantity: number,
    productOwner: string,
  ) {
    return {
      _id: new Realm.BSON.ObjectId(),
      productName,
      productQuantity,
      productOwner,
    };
  }

  static schema = {
    name: "Warehouse",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      productName: "string",
      productQuantity: "float",
      productOwner: "string",
    },
  };
}

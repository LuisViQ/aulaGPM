import Realm from "realm";

export class Checklist extends Realm.Object<Checklist> {
  _id!: Realm.BSON.ObjectId;
  helmet!: string;
  boots?: string;
  gloves?: string;
  appliances?: string;
  static generate(
    helmet: string,
    boots: string,
    gloves: string,
    appliances: string,
  ) {
    return {
      _id: new Realm.BSON.ObjectId(),
      helmet,
      boots,
      gloves,
      appliances,
    };
  }

  static schema = {
    name: "Checklist",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      helmet: "string",
      boots: "string",
      gloves: "string",
      appliances: "string",
    },
  };
}

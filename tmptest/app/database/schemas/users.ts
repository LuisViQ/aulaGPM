import Realm from "realm";

export class Users extends Realm.Object<Users> {
  _id!: Realm.BSON.ObjectId;
  username!: string;
  nickname?: string;
  static generate(username: string, nickname: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      username,
      nickname,
    };
  }

  static schema = {
    name: "Users",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      username: "string",
      nickname: "string",
    },
  };
}

import { StatusBar } from "react-native";
import { GenericCrudScreen } from "../crud/GenericCrudScreen";
import { Users } from "../database/schemas/users";

export default function UsersScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <GenericCrudScreen<Users>
        title="Users"
        schemaName="Users"
        fields={
          [
            { key: "username", label: "Username", type: "string" },
            { key: "nickname", label: "Nickname", type: "string" },
          ] as const
        }
      />
    </>
  );
}

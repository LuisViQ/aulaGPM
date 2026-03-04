import { StatusBar } from "react-native";
import { GenericCrudScreen } from "./crud/GenericCrudScreen";
import { Warehouse } from "./database/schemas/warehouse";

export default function App() {
  return (
    <>
      {/* <StatusBar barStyle={"dark-content"} />
      <GenericCrudScreen<Users>
        title="Users"
        schemaName="Users"
        fields={
          [
            { key: "username", label: "Name", type: "string" },
            { key: "nickname", label: "Nickname", type: "string" },
          ] as const
        }
      />
    </> */}
      <StatusBar barStyle={"dark-content"} />
      <GenericCrudScreen<Warehouse>
        title="Warehouse"
        schemaName="Warehouse"
        fields={
          [
            { key: "productName", label: "Product Name", type: "string" },
            { key: "productQuantity", label: "Quantity", type: "number" },
            {
              key: "productOwner",
              label: "Product Owner",
              type: "string",
            },
          ] as const
        }
      />
    </>
  );
}

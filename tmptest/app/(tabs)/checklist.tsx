import { StatusBar } from "react-native";
import { GenericCrudScreen } from "../crud/GenericCrudScreen";
import { Checklist } from "../database/schemas/checklist";

export default function ChecklistScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <GenericCrudScreen<Checklist>
        title="Checklist"
        schemaName="Checklist"
        fields={
          [
            { key: "helmet", label: "Helmet", type: "string" },
            { key: "boots", label: "Boots", type: "string" },
            { key: "gloves", label: "Gloves", type: "string" },
            { key: "appliances", label: "Appliances", type: "string" },
          ] as const
        }
      />
    </>
  );
}

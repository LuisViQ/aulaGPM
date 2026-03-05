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
            {
              key: "helmet",
              label: "Helmet",
              type: "checkbox",
              checkedValue: "Compliant",
              uncheckedValue: "Non-compliant",
            },
            {
              key: "boots",
              label: "Boots",
              type: "checkbox",
              checkedValue: "Compliant",
              uncheckedValue: "Non-compliant",
            },
            {
              key: "gloves",
              label: "Gloves",
              type: "checkbox",
              checkedValue: "Compliant",
              uncheckedValue: "Non-compliant",
            },
            {
              key: "appliances",
              label: "Appliances",
              type: "checkbox",
              checkedValue: "Compliant",
              uncheckedValue: "Non-compliant",
            },
          ] as const
        }
      />
    </>
  );
}

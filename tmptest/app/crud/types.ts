export type CrudFieldType = "string" | "number" | "checkbox";
export type CrudMode = "create" | "edit";
export type EmptyStateTarget = "something" | "someone";

type TextFieldConfig<T, K extends keyof T = keyof T> = {
  key: K;
  label: string;
  type: "string" | "number";
};

type CheckboxFieldConfig<T, K extends keyof T = keyof T> = {
  key: K;
  label: string;
  type: "checkbox";
  checkedValue?: string;
  uncheckedValue?: string;
};

export type FieldConfig<T, K extends keyof T = keyof T> =
  | TextFieldConfig<T, K>
  | CheckboxFieldConfig<T, K>;

export type FormValue = string | number;

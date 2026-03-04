export type CrudFieldType = "string" | "number";
export type CrudMode = "create" | "edit";

// Config de um campo que aparece no formulário/lista.
// - key: só permite chaves que existam na entidade (keyof T)
export type FieldConfig<T, K extends keyof T = keyof T> = {
  key: K;
  label: string;
  type: CrudFieldType;
};

// Valor que o form guarda (TextInput entrega string, mas "number" vira number)
export type FormValue = string | number;

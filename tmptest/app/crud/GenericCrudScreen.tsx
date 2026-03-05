import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { useQuery, useRealm } from "@realm/react";
import React, { useState } from "react";
import { Alert, FlatList, Pressable, Text, View } from "react-native";
import Realm from "realm";
import { parseByType } from "./parse";
import { CrudMode, EmptyStateTarget, FieldConfig, FormValue } from "./types";

type WithId = { _id: Realm.BSON.ObjectId };

type Props<T extends WithId> = {
  title: string;
  schemaName: string;
  fields: readonly FieldConfig<T, keyof T>[];
  emptyStateTarget?: EmptyStateTarget;
};

export function GenericCrudScreen<T extends WithId>({
  title,
  schemaName,
  fields,
  emptyStateTarget = "something",
}: Props<T>) {
  const realm = useRealm();
  const data = useQuery<T>(schemaName);

  function getCheckboxCheckedValue(field: FieldConfig<T, keyof T>) {
    if (field.type !== "checkbox") return "";
    return field.checkedValue ?? "Yes";
  }

  function getCheckboxUncheckedValue(field: FieldConfig<T, keyof T>) {
    if (field.type !== "checkbox") return "";
    return field.uncheckedValue ?? "No";
  }

  function getInitialForm() {
    const initial: Partial<Record<keyof T, FormValue>> = {};

    for (const field of fields) {
      if (field.type === "checkbox") {
        initial[field.key] = getCheckboxUncheckedValue(field);
      }
    }

    return initial;
  }

  function getFieldFallback(field: FieldConfig<T, keyof T>): FormValue {
    if (field.type === "checkbox") {
      return getCheckboxUncheckedValue(field);
    }
    return "";
  }

  const [mode, setMode] = useState<CrudMode>("create");
  const [editing, setEditing] = useState<T | null>(null);
  const [form, setForm] = useState<Partial<Record<keyof T, FormValue>>>(() =>
    getInitialForm(),
  );

  function reset() {
    setForm(getInitialForm());
    setMode("create");
    setEditing(null);
  }

  function setField(key: keyof T, value: FormValue) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submit() {
    const hasEmptyField = fields.some((field) => {
      const value = form[field.key];
      if (value === undefined) return true;
      if (typeof value === "string" && value.trim() === "") return true;
      return false;
    });

    if (hasEmptyField) {
      Alert.alert("Error", "Fill in all the fields.");
      return;
    }

    realm.write(() => {
      if (mode === "create") {
        realm.create(schemaName, {
          _id: new Realm.BSON.ObjectId(),
          ...form,
        });
        reset();
        return;
      }

      if (mode === "edit" && editing) {
        for (const field of fields) {
          (editing as unknown as Record<keyof T, FormValue>)[field.key] =
            form[field.key] ?? getFieldFallback(field);
        }
        reset();
      }
    });
  }

  function confirmDelete(item: T) {
    Alert.alert("Confirm", "Confirm deletion?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => realm.write(() => realm.delete(item)),
      },
    ]);
  }

  function startEdit(item: T) {
    const next: Partial<Record<keyof T, FormValue>> = {};
    const record = item as unknown as Record<keyof T, FormValue>;

    for (const field of fields) {
      next[field.key] = record[field.key];
    }

    setForm(next);
    setEditing(item);
    setMode("edit");
  }

  return (
    <View className="flex-1 bg-white p-6">
      <View className="items-center">
        <Card className="w-full max-w-[420px] p-5 gap-4">
          <Text className="text-xl font-bold text-center text-slate-950">
            {title}
          </Text>

          {fields.map((field) => {
            if (field.type === "checkbox") {
              const checkedValue = getCheckboxCheckedValue(field);
              const uncheckedValue = getCheckboxUncheckedValue(field);
              const isChecked =
                String(form[field.key] ?? uncheckedValue) === checkedValue;

              return (
                <Pressable
                  key={String(field.key)}
                  className="flex-row items-center gap-3"
                  onPress={() =>
                    setField(
                      field.key,
                      isChecked ? uncheckedValue : checkedValue,
                    )
                  }
                >
                  <View
                    className={`h-5 w-5 rounded border items-center justify-center ${
                      isChecked
                        ? "bg-slate-900 border-slate-900"
                        : "bg-white border-slate-400"
                    }`}
                  >
                    {isChecked ? (
                      <Text className="text-white text-xs font-bold">X</Text>
                    ) : null}
                  </View>
                  <Text className="text-sm text-slate-900">{field.label}</Text>
                </Pressable>
              );
            }

            return (
              <Input key={String(field.key)}>
                <InputField
                  placeholder={field.label}
                  value={String(form[field.key] ?? "")}
                  keyboardType={field.type === "number" ? "numeric" : "default"}
                  onChangeText={(raw) =>
                    setField(field.key, parseByType(field.type, raw))
                  }
                />
              </Input>
            );
          })}

          <Button onPress={submit}>
            <ButtonText>
              {mode === "create" ? "New Register" : "Update"}
            </ButtonText>
          </Button>

          {mode === "edit" && (
            <Button variant="outline" onPress={reset}>
              <ButtonText>Cancel</ButtonText>
            </Button>
          )}
        </Card>
      </View>

      <View className="flex-1 items-center mt-5">
        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={{ gap: 10, paddingBottom: 24 }}
          data={data.sorted("_id")}
          keyExtractor={(item) => item._id.toHexString()}
          ListEmptyComponent={
            <View className="w-full max-w-[420px] mt-4">
              <Text className="text-center text-gray-950">
                {`Nothing here, add ${emptyStateTarget}`}
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            const record = item as unknown as Record<keyof T, FormValue>;

            return (
              <Card className="w-full max-w-[420px] p-4 gap-3">
                <View className="w-full gap-1">
                  {fields.map((field) => {
                    const value = String(record[field.key] ?? "");
                    const line =
                      field.type === "checkbox" ? `${field.label}: ${value}` : value;

                    return (
                      <Text
                        key={String(field.key)}
                        className="font-semibold text-slate-950"
                      >
                        {line}
                      </Text>
                    );
                  })}
                </View>

                <View className="w-full flex-row justify-end gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onPress={() => startEdit(item)}
                  >
                    <ButtonText>Edit</ButtonText>
                  </Button>
                  {mode === "create" && (
                    <Button
                      size="sm"
                      action="negative"
                      variant="outline"
                      onPress={() => confirmDelete(item)}
                    >
                      <ButtonText>Del</ButtonText>
                    </Button>
                  )}
                </View>
              </Card>
            );
          }}
        />
      </View>
    </View>
  );
}

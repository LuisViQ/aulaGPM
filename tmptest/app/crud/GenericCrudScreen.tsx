import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { useQuery, useRealm } from "@realm/react";
import React, { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import Realm from "realm";
import { parseByType } from "./parse";
import { CrudMode, FieldConfig } from "./types";

type WithId = { _id: Realm.BSON.ObjectId };

type Props<T extends WithId> = {
  title: string;
  schemaName: string;
  fields: readonly FieldConfig<T, keyof T>[];
};

type FormValue = string | number;

export function GenericCrudScreen<T extends WithId>({
  title,
  schemaName,
  fields,
}: Props<T>) {
  const realm = useRealm();
  const data = useQuery<T>(schemaName);

  const [mode, setMode] = useState<CrudMode>("create");
  const [editing, setEditing] = useState<T | null>(null);
  const [form, setForm] = useState<Partial<Record<keyof T, FormValue>>>({});

  function reset() {
    setForm({});
    setMode("create");
    setEditing(null);
  }

  function setField(key: keyof T, value: FormValue) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submit() {
    realm.write(() => {
      if (mode === "create") {
        realm.create(schemaName, {
          _id: new Realm.BSON.ObjectId(),
          ...form,
        });
        console.log(form);
        reset();
        return;
      }

      if (mode === "edit" && editing) {
        for (const f of fields) {
          (editing as unknown as Record<keyof T, FormValue>)[f.key] =
            form[f.key] ?? "";
        }
        reset();
      }
    });
  }

  function confirmDelete(item: T) {
    Alert.alert("Confirm", "Confirm deletion ?", [
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

    for (const f of fields) {
      next[f.key] = record[f.key];
    }

    setForm(next);
    setEditing(item);
    setMode("edit");
  }

  return (
    <View className="flex-1 bg-white p-6 ">
      <View className="items-center">
        <Card className="w-full max-w-[420px] p-5 gap-4">
          <Text className="text-xl font-bold text-center text-gray-50">
            {title}
          </Text>

          {fields.map((f) => (
            <Input key={String(f.key)}>
              <InputField
                placeholder={f.label}
                value={String(form[f.key] ?? "")}
                keyboardType={f.type === "number" ? "numeric" : "default"}
                onChangeText={(raw) =>
                  setField(f.key, parseByType(f.type, raw))
                }
              />
            </Input>
          ))}

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
              <Text className="text-center text-gray-500">
                Nothing here, add something
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            const record = item as unknown as Record<keyof T, FormValue>;

            return (
              <Card className="w-full max-w-[420px] p-4 flex-row items-center justify-between gap-3">
                <View className="flex-1">
                  <Text
                    className="font-semibold text-gray-50"
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {fields.map((f) => String(record[f.key] ?? "")).join(" • ")}
                  </Text>
                </View>

                <View className="flex-row gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onPress={() => startEdit(item)}
                  >
                    <ButtonText>Edit</ButtonText>
                  </Button>

                  <Button
                    size="sm"
                    action="negative"
                    variant="outline"
                    onPress={() => confirmDelete(item)}
                  >
                    <ButtonText>Del</ButtonText>
                  </Button>
                </View>
              </Card>
            );
          }}
        />
      </View>
    </View>
  );
}

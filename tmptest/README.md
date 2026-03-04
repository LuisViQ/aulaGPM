# CRUD Genérico com React Native + TypeScript + Realm

Projeto de estudo com uma tela CRUD reutilizável para múltiplas entidades, usando React Native (Expo), TypeScript e Realm.

## Funcionalidades

- Criar registros
- Listar registros em tempo real
- Editar registros
- Excluir com confirmação
- Reaproveitar o mesmo componente para entidades diferentes

## Stack

- Expo + React Native
- TypeScript
- Realm (`realm` + `@realm/react`)
- Gluestack UI
- NativeWind

## Estrutura principal

```txt
tmp-test/
  app/
    crud/
      GenericCrudScreen.tsx
      parse.ts
      types.ts
    database/
      schemas/
        users.ts
        warehouse.ts
    index.tsx
  App.tsx
```

## Como executar

### Pré-requisitos

- Node.js LTS
- npm
- Expo Go (ou Android Studio / Xcode)

### Passos

```bash
npm install
npm start
```

Atalhos úteis:

```bash
npm run android
npm run ios
npm run web
npm run lint
```

## Como funciona o CRUD genérico

O componente central é:

```tsx
<GenericCrudScreen<T> />
```

Props principais:

- `title`: título da tela
- `schemaName`: nome do schema no Realm
- `fields`: configuração de campos do formulário/lista

Tipos usados:

```ts
export type CrudFieldType = "string" | "number";
export type CrudMode = "create" | "edit";

export type FieldConfig<T, K extends keyof T = keyof T> = {
  key: K;
  label: string;
  type: CrudFieldType;
};
```

`keyof T` garante que apenas campos existentes na entidade sejam aceitos.

## Exemplo atual (Warehouse)

Hoje o app está configurado para a entidade `Warehouse` em `app/index.tsx`:

```tsx
<GenericCrudScreen<Warehouse>
  title="Warehouse"
  schemaName="Warehouse"
  fields={[
    { key: "productName", label: "Product Name", type: "string" },
    { key: "productQuantity", label: "Quantity", type: "number" },
    { key: "productOwner", label: "Product Owner", type: "string" },
  ] as const}
/>
```

## Adicionando uma nova entidade

1. Crie o schema em `app/database/schemas`.
2. Registre o schema no `RealmProvider` em `App.tsx`.
3. Use `GenericCrudScreen<SeuTipo>` em `app/index.tsx`.
4. Defina os `fields` com chaves válidas da entidade.

## Observações

- O helper `parseByType` converte campos `number` vindos do `TextInput`.
- Novos registros recebem `_id` automaticamente com `Realm.BSON.ObjectId`.
- A lista é reativa com `useQuery`, então atualiza após create/edit/delete sem refresh manual.

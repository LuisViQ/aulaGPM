# CRUD Generico com React Native + TypeScript + Realm

Projeto de estudo com um CRUD reutilizavel para multiplas entidades, usando React Native (Expo), TypeScript, Realm e `expo-router`.

## Funcionalidades

- Criar registros
- Listar registros em tempo real
- Editar registros
- Excluir com confirmacao
- Reaproveitar o mesmo componente para entidades diferentes
- Navegacao por abas com uma tela para cada entidade
- Suporte a campos `string`, `number` e `checkbox`
- Tipagem para estado vazio contextual (`something` ou `someone`)

## Stack

- Expo + React Native
- Expo Router
- TypeScript
- Realm (`realm` + `@realm/react`)
- Gluestack UI
- NativeWind

## Estrutura principal

```txt
tmptest/
  app/
    _layout.tsx
    (tabs)/
      _layout.tsx
      warehouse.tsx
      users.tsx
      checklist.tsx
    crud/
      GenericCrudScreen.tsx
      parse.ts
      types.ts
    database/
      schemas/
        warehouse.ts
        users.ts
        checklist.ts
```

## Abas atuais

- `Warehouse` (`app/(tabs)/warehouse.tsx`)
- `Users` (`app/(tabs)/users.tsx`)
- `Checklist` (`app/(tabs)/checklist.tsx`)

As rotas de abas sao configuradas em `app/(tabs)/_layout.tsx` com `Tabs.Screen`.

## Tipagem do CRUD

Todas as telas reutilizam o mesmo componente generico:

```tsx
<GenericCrudScreen<T> />
```

Props principais:

- `title`: titulo da tela
- `schemaName`: nome do schema no Realm
- `fields`: configuracao de campos do formulario/lista, tipada por entidade (`FieldConfig<T>`)
- `emptyStateTarget`: tipado como `"something" | "someone"`

Exemplo de tipagem do alvo de estado vazio (tipo de pessoa/coisa):

```ts
export type EmptyStateTarget = "something" | "someone";
```

Uso na aba de usuarios:

```tsx
<GenericCrudScreen<Users>
  title="Users"
  schemaName="Users"
  emptyStateTarget="someone"
  fields={...}
/>
```

## Como executar

### Pre-requisitos

- Node.js LTS
- npm
- Expo Go (ou Android Studio / Xcode)

### Passos

```bash
npm install
npm start
```

Atalhos uteis:

```bash
npm run android
npm run ios
npm run web
npm run lint
```

## Adicionando uma nova entidade/tabela

1. Crie o schema em `app/database/schemas`.
2. Registre o schema em `app/_layout.tsx` no `RealmProvider`.
3. Crie uma tela em `app/(tabs)/sua-entidade.tsx` usando `GenericCrudScreen<SeuTipo>`.
4. Adicione a nova rota em `app/(tabs)/_layout.tsx` com `Tabs.Screen`.

## Observacoes

- O helper `parseByType` converte campos `number` vindos do `TextInput`.
- Novos registros recebem `_id` automaticamente com `Realm.BSON.ObjectId`.
- A lista e reativa com `useQuery`, entao atualiza apos create/edit/delete sem refresh manual.
- Campos `checkbox` podem definir `checkedValue` e `uncheckedValue` por tela.

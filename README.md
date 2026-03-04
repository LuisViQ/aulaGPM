# Aulas GPM — JavaScript, TypeScript e React Native

Repositório de estudos organizado por trilhas. Cada pasta é um projeto independente, com dependências e execução próprias.

## Trilhas do repositório

- `Atividades CURSO EM VIDEO JS/`: fundamentos de JavaScript no navegador.
- `Atividades JS ES6/`: exercícios com ES6, `async/await` e `fetch`.
- `Atividades DIO AULAS/`: desafios de lógica em Node.js.
- `Atividades DIO REFINANDO/`: desafios DIO com entrada/saída no padrão `gets/print`.
- `Atividade Formacao TS/`: estudos em TypeScript (fundamentos, Node e React).
- `Atividade Formacao React Native/`: apps mobile com Expo e React Native.
- `atvdind/imgmetdat/`: projeto independente em React Native (Expo).
- `tmp-test/`: CRUD genérico com React Native + TypeScript + Realm.

## Mapa rápido

| Pasta | Foco | Como executar |
| --- | --- | --- |
| `Atividades CURSO EM VIDEO JS/` | JS + HTML/CSS | abrir os arquivos `.html` no navegador |
| `Atividades JS ES6/` | ES6 + Fetch | servidor estático local |
| `Atividades DIO AULAS/` | lógica com Node | `node <arquivo>.js` |
| `Atividades DIO REFINANDO/` | lógica DIO (`gets/print`) | adaptar para `stdin`/`console.log` |
| `Atividade Formacao TS/` | TS, Node e React | `npm install` e scripts de cada subpasta |
| `Atividade Formacao React Native/` | apps Expo | `npm install` + `npm start` |
| `atvdind/imgmetdat/` | app Expo | `npm install` + `npm start` |
| `tmp-test/` | CRUD genérico com Realm | `npm install` + `npm start` |

## Execução por stack

### TypeScript (Node)

```bash
cd "Atividade Formacao TS/Fundamentos do TS"
npm install
npm run dev
```

```bash
cd "Atividade Formacao TS/IntroducaoNodeEAvancado"
npm install
npm run migration:run
npm run dev
```

### React (TypeScript)

```bash
cd "Atividade Formacao TS/Introdução ao React/my-app-ts"
npm install
npm start
```

### React Native (Expo)

```bash
cd "Atividade Formacao React Native/react-nav"
npm install
npm start
```

Outros apps Expo seguem o mesmo padrão (`bat-help`, `bat-pass-app`, `aula-states`, `aula-context`, `introduicaoaoreactnative`, `videoCamera`, `cameratest`, `lamborghini-garage`, `atvdind/imgmetdat`, `tmp-test`).

### JavaScript no navegador

```bash
cd "Atividades JS ES6"
python -m http.server 3000
```

Depois abra `http://localhost:3000/index.html`.

### Desafios Node

```bash
node "Atividades DIO AULAS/Desafio1/index.js"
node "Atividades DIO AULAS/Desafio2/index.js"
node "Atividades DIO AULAS/Desafio3/index.js"
```

## Observações

- Em `Atividades DIO REFINANDO/`, os exercícios usam `gets/print` da plataforma DIO.
- Para execução local, adapte para leitura via `stdin` e saída com `console.log`.
- Como os projetos são independentes, instale dependências dentro da pasta desejada.

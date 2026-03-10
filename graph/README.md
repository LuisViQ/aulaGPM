# Fleet Dashboard with React Native + Expo + Gifted Charts

Projeto de estudo com um **dashboard de monitoramento de frota**, exibindo gráficos sobre veículos, infrações, velocidade e distribuição regional.

O aplicativo foi desenvolvido com **React Native usando Expo**, utilizando dados mockados em JSON e componentes reutilizáveis para os gráficos.

## Funcionalidades

* Visualizar quantidade de veículos por tipo
* Visualizar status da frota (connected, off, outdated)
* Ranking de motoristas com mais infrações
* Analisar infrações por tipo
* Monitorar velocidade de veículos ao longo do dia
* Visualizar distribuição da frota por região
* Componentização de gráficos reutilizáveis
* Separação entre telas e componentes

## Stack

* Expo + React Native
* TypeScript
* React Native Gifted Charts
* React Native Safe Area Context
* Expo Vector Icons

## Motivo da escolha da biblioteca de gráficos

A biblioteca **react-native-gifted-charts** foi escolhida principalmente por possuir **alta compatibilidade com Expo**.

[Documentação](https://gifted-charts.web.app/)

[GitHub](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts)

Muitas bibliotecas de gráficos para React Native dependem de **bibliotecas nativas ou de configurações específicas do React Native CLI**, o que pode gerar dificuldades ao utilizar Expo.

Comando para instalação.

```
npx expo install react-native-gifted-charts expo-linear-gradient react-native-svg
```

O `react-native-gifted-charts` oferece:

* compatibilidade direta com Expo
* suporte a múltiplos tipos de gráfico
* boa documentação
* fácil integração com TypeScript
* animações integradas

Além disso, a biblioteca permite criar rapidamente gráficos como:

* BarChart
* LineChart
* PieChart
* RadarChart

sem necessidade de configuração nativa adicional.

Isso torna o desenvolvimento mais rápido e simples dentro do ecossistema Expo.

## Estrutura principal

```txt
fleet-dashboard/
  components/
    chartBlock.tsx
    driversInfractionsChart.tsx
    speedChartsBlock.tsx
    regionRadarChart.tsx

  screens/
    home.tsx
    infractions.tsx
    speed.tsx
    regions.tsx
    styles.ts

  data/
    mockedData.json

  types/
    types.ts
```

## Telas do aplicativo

### Home

Tela principal do aplicativo com visão geral da frota.

Contém:

* resumo com métricas principais
* gráfico de veículos por tipo
* gráfico de veículos por status

### Infractions

Tela focada em análise de infrações.

Contém:

* gráfico de infrações por tipo
* ranking de motoristas com mais infrações

### Speed

Tela de monitoramento de velocidade.

Contém:

* gráfico de barras com velocidade por hora
* gráfico de linha com tendência de velocidade ao longo do dia
* resumo com velocidade média e máxima

### Regions

Tela de análise geográfica da frota.

Contém:

* RadarChart exibindo distribuição de veículos por região

## Estrutura dos dados

Os dados utilizados no projeto são **mockados em JSON**.

Exemplo simplificado:

```json
{
  "vehiclesByType": [
    { "text": "car", "value": 18 },
    { "text": "truck", "value": 7 },
    { "text": "motorbike", "value": 12 },
    { "text": "van", "value": 5 }
  ],

  "vehiclesByStatus": [
    { "label": "Connected", "value": 16 },
    { "label": "Off", "value": 14 },
    { "label": "Outdated 30m", "value": 8 },
    { "label": "Outdated 24h", "value": 4 }
  ],

  "driversWithMoreInfractions": [
    { "label": "Carlos", "value": 12 },
    { "label": "Mariana", "value": 10 }
  ],

  "vehicleSpeedPerHour": [
    { "label": "06:00", "value": 0 },
    { "label": "07:00", "value": 18 },
    { "label": "08:00", "value": 35 }
  ],

  "vehiclesByRegion": [
    { "label": "North", "value": 9 },
    { "label": "South", "value": 7 },
    { "label": "East", "value": 12 },
    { "label": "West", "value": 6 },
    { "label": "Center", "value": 8 }
  ],
  "infractionsByType": [
    { "label": "Speed", "value": 20 },
    { "label": "Braking", "value": 11 },
    { "label": "Sharp curve", "value": 8 },
    { "label": "Acceleration", "value": 13 }
  ],
}
```

## Componentização dos gráficos

Cada gráfico foi transformado em um componente reutilizável.

Exemplos:

* `ChartBlock` — gráfico genérico utilizado em várias telas
* `DriversInfractionsChart` — ranking de motoristas
* `SpeedChartsBlock` — gráficos de velocidade
* `RegionRadarChart` — radar chart por região

Isso permite reutilização e melhor organização do código.

## Como executar

### Pré-requisitos

* Node.js LTS
* npm ou yarn
* Expo CLI
* Expo Go (ou Android Studio / Xcode)

### Instalar dependências

```bash
npm install
```

### Executar o projeto

```bash
npm start
```

Atalhos úteis:

```bash
npm run android
npm run ios
npm run web
```

## Observações

* Os dados são mockados em JSON para simplificar o desenvolvimento.
* A arquitetura separa **componentes de gráficos** das **telas**, facilitando manutenção.
* A escolha da biblioteca de gráficos priorizou **compatibilidade com Expo e facilidade de uso**.
* A estrutura modular permite adicionar novos gráficos ou telas facilmente.


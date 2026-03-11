# Fleet Dashboard com React Native + Expo + Gifted Charts

Projeto de estudo com um **dashboard de monitoramento de frota**, exibindo gráficos sobre veículos, infrações, velocidade e distribuição regional.

O aplicativo foi desenvolvido com **React Native usando Expo**, utilizando dados mockados em JSON e componentes reutilizáveis para os gráficos.

## Funcionalidades

* Visualizar quantidade de veículos por tipo (carro, caminhão, moto, van)
* Visualizar status da frota (conectado, desligado, desatualizado)
* Ranking de motoristas com mais infrações
* Analisar infrações por tipo
* Monitorar velocidade detalhada com filtros por veículo e data
* Visualizar distribuição da frota por região
* Componentização de gráficos reutilizáveis
* Separação entre telas e componentes

## Stack

* Expo + React Native
* TypeScript
* React Native Gifted Charts
* React Native Safe Area Context
* Expo Vector Icons
* React Native Picker (para os filtros de seleção)

## Motivo da escolha da biblioteca de gráficos

A biblioteca **react-native-gifted-charts** foi escolhida principalmente por possuir **alta compatibilidade com Expo**.

[Documentação](https://gifted-charts.web.app/)

[GitHub](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts)

Muitas bibliotecas de gráficos para React Native dependem de **bibliotecas nativas ou de configurações específicas do React Native CLI**, o que pode gerar dificuldades ao utilizar Expo.

Comando para instalação:

```bash
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
* PieChart (e Donut)
* RadarChart

sem necessidade de configuração nativa adicional. Isso torna o desenvolvimento mais rápido e simples dentro do ecossistema Expo.

## Estrutura principal

```txt
fleet-dashboard/
  components/
    chartBlock.tsx
    driversInfractionsChart.tsx
    horizontalBarChart.tsx
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

* resumo com métricas principais (total de veículos e conectados)
* gráfico de veículos por tipo (Pizza/Donut)
* gráfico de veículos por status (Pizza/Donut)

### Infractions

Tela focada em análise de infrações.

Contém:

* gráfico de infrações por tipo
* ranking de motoristas com mais infrações utilizando um gráfico de barras horizontais personalizado

### Speed

Tela de monitoramento de velocidade.

Contém:

* filtros interativos para selecionar o veículo específico e a data
* gráfico de barras com velocidade por hora
* gráfico de linha com tendência de velocidade ao longo do dia
* resumo de indicadores com velocidade média, velocidade máxima e status (Alto, Moderado, Baixo)

### Regions

Tela de análise geográfica da frota.

Contém:

* RadarChart exibindo a distribuição de veículos pelas regiões de operação (Norte, Sul, Leste, Oeste, Centro)

## Estrutura dos dados

Os dados utilizados no projeto são **mockados em JSON** e totalmente estruturados em português.

Exemplo simplificado destacando o aninhamento dos dados de velocidade:

```json
{
  "vehiclesByType": [
    { "text": "carro", "value": 18 },
    { "text": "caminhão", "value": 7 }
  ],
  "vehiclesByStatus": [
    { "label": "Conectado", "value": 16 },
    { "label": "Desligado", "value": 14 }
  ],
  "driversWithMoreInfractions": [
    { "label": "Carlos", "value": 12 },
    { "label": "Mariana", "value": 10 }
  ],
  "vehicleSpeedByVehicle": [
    {
      "vehicleId": "VH001",
      "vehicleLabel": "Caminhão 01",
      "dates": [
        {
          "date": "2026-03-08",
          "data": [
            { "label": "00:00", "value": 0 },
            { "label": "08:00", "value": 55 },
            { "label": "13:00", "value": 90 }
          ]
        }
      ]
    }
  ],
  "vehiclesByRegion": [
    { "label": "Norte", "value": 9 },
    { "label": "Sul", "value": 7 }
  ],
  "infractionsByType": [
    { "label": "Velocidade", "value": 20 },
    { "label": "Frenagem", "value": 11 }
  ]
}

```

## Componentização dos gráficos

Cada gráfico foi transformado em um componente reutilizável para manter a separação de responsabilidades.

Exemplos:

* `ChartBlock` — container genérico para os gráficos de pizza/donut
* `HorizontalBarChart` — componente customizado para exibir rankings sem problemas de renderização
* `DriversInfractionsChart` — componente que encapsula o ranking de motoristas
* `SpeedChartsBlock` — lida com os gráficos de barra e linha da tela de velocidade
* `RegionRadarChart` — encapsula as configurações complexas do radar chart

## Como executar

### Pré-requisitos

* Node.js LTS
* npm ou yarn
* Expo CLI
* Expo Go (ou emulador Android Studio / simulador Xcode)

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

* Os dados são mockados em JSON para simplificar o desenvolvimento e focar na construção da UI.
* A arquitetura separa **componentes de gráficos** das **telas**, facilitando manutenção e leitura.
* A escolha da biblioteca de gráficos priorizou **compatibilidade com Expo e facilidade de uso**.
* A estrutura modular e a extração de uma folha de estilos global (`styles.ts`) permitem expandir o app com novas telas de forma rápida e padronizada.


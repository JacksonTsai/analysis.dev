# ANALYSIS.DEV

<p align="left">
</p>
<p align="center">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=flat-square&logo=Sass&logoColor=white" alt="Sass">
	<img src="https://img.shields.io/badge/Chart.js-FF6384.svg?style=flat-square&logo=chartdotjs&logoColor=white" alt="Chart.js">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black" alt="Prettier">
	<br>
</p>

<br>

<details>
<summary>Table of Contents</summary>

- [Repository Structure](#repository-structure)
- [Modules ](#modules)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#Installation)
  - [Start](#Start)
  - [Tests](#tests)

</details>
<hr>

## Repository Structure

```sh
└── analysis.dev/
    ├── README.md
    ├── eslint.config.js
    ├── favicon.svg
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── src
    │   ├── App.tsx
    │   ├── apis
    │   ├── assets
    │   ├── components
    │   ├── index.scss
    │   ├── main.tsx
    │   ├── pages
    │   ├── router
    │   ├── types
    │   ├── utils
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## Modules

##### Components

| File                                                                                                                   | Summary                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [InputField.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/components/InputField.tsx)         | Input field component that integrates with React Hook Form.                                 |
| [Card.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/components/Card.tsx)                     | Card component that displays its children inside a styled container                         |
| [TopBar.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/components/TopBar.tsx)                 | Top navigation bar component that displays an analysis icon, app name, and user information |
| [AppLayout.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/components/AppLayout.tsx)           | Layout component that provides a top bar, sidebar, and main content area                    |
| [PopulationCard.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/components/PopulationCard.tsx) | PopulationCard component that displays a line chart of male and female birth data           |
| [SideBar.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/components/SideBar.tsx)               | Sidebar component that provides navigation links.                                           |
| [Button.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/components/Button.tsx)                 | Button component with customizable label, callback, disabled state, and button type         |
| [WeatherCard.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/components/WeatherCard.tsx)       | WeatherCard component that displays weather information.                                    |

##### Pages

| File                                                                                                          | Summary                                                                               |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [TodayWeather.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/pages/TodayWeather.tsx) | TodayWeather page allows users to search for the current weather by city and country. |
| [Population.tsx](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/pages/Population.tsx)     | Population page displays population chart.                                            |

##### API

| File                                                                                                           | Summary             |
| -------------------------------------------------------------------------------------------------------------- | ------------------- |
| [weatherApi.ts](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/apis/weather/weatherApi.ts) | OpenWeatherMap API. |

##### Utils

| File                                                                                                                        | Summary                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [weatherDataTransform.ts](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/utils/weatherDataTransform.ts) | Transforms weather API response data into a format suitable for the WeatherCardInfo type |

##### Types

| File                                                                                                              | Summary           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------- |
| [weatherCardType.ts](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/types/weatherCardType.ts) | weather card type |
| [wetherApiType.ts](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/types/wetherApiType.ts)     | wether api type   |
| [buttonType.ts](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/types/buttonType.ts)           | button type       |
| [textFieldType.ts](https://github.com/JacksonTsai/analysis.dev/blob/feat-analysis/src/types/textFieldType.ts)     | textField type    |

---

## Getting Started

### Prerequisites

- node

- npm

### Installation

Build the project from source:

1. Clone the analysis.dev repository:

```sh
 git clone https://github.com/JacksonTsai/analysis.dev
```

2. Navigate to the project directory:

```sh
 cd analysis.dev
```

3. Install the required dependencies:

```sh
 npm install
```

### Start

```sh
 npm run dev
```

### Tests

Execute the test suite using the following command:

```sh
 npm run test
```

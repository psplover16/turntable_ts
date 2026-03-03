# turntable_ts

統一發票抽獎 WebView 專案（Vue3 + Vite + TypeScript）。

## 技術棧

- Vue 3（`script setup`）
- Vite 6
- TypeScript（strict）
- Vue Router 4
- Pinia
- Tailwind CSS
- Axios
- lottie-web

## 啟動方式

```bash
npm install
npm run dev
```

建置檢查：

```bash
npm run build
```

## 環境變數

- `VITE_API_BASE_URL`：API 基底網址
- `VITE_USE_API`：`true` 使用 API、`false` 使用 mocks
- `VITE_APP_TOKEN`：本地模擬 JWT

## 專案結構

```text
.
├─ api-spec/                       # OpenAPI 規格
├─ docs/
│  └─ product/carPlus/             # carPlus 需求文件（system/home/components...）
├─ src/
│  ├─ api/                         # Axios 與 API 函式
│  │  ├─ http.ts                   # 共用 Axios instance（自動帶 JWT、taskId、401 refresh）
│  │  └─ activityApi.ts            # 活動詳情與抽獎 API
│  ├─ assets/
│  │  └─ lottie/fireworks.json     # 煙火動畫
│  ├─ components/common/
│  │  ├─ RouletteWheel.vue         # 共用轉盤元件
│  │  └─ FireworksBanner.vue       # lottie 煙火顯示
│  ├─ config/
│  │  ├─ constants.ts              # 環境常數
│  │  └─ themeConfigs.ts           # 路由主題設定（carPlus/starnic）
│  ├─ mobile/
│  │  └─ msgMobile.ts              # 手機事件模組外觀（目前接 mock）
│  ├─ mocks/
│  │  ├─ dummy.ts                  # WebConfig/ActivityDetail/Draw/JWT mock
│  │  ├─ activityRouteUtils.ts     # 依路由載入對應主題 mock
│  │  ├─ types.ts                  # mock 型別
│  │  └─ detail/
│  │     ├─ carPlus.ts             # carPlus 主題獎項資料
│  │     └─ starnic.ts             # starnic 主題獎項資料
│  ├─ providers/
│  │  └─ activityProvider.ts       # API/Mock provider 切換（回傳型別一致）
│  ├─ router/
│  │  └─ index.ts                  # `/:activityName` 動態主題路由
│  ├─ stores/
│  │  ├─ mobileData.ts             # 手機參數與 JWT pinia
│  │  └─ activity.ts               # 活動資料與抽獎 pinia
│  ├─ types/
│  │  ├─ activity.ts               # 活動 domain 型別
│  │  └─ mobile.ts                 # 手機參數型別
│  ├─ views/
│  │  ├─ ThemeHostView.vue         # 主題入口（依 route 決定視圖）
│  │  └─ themes/CarPlusHomeView.vue# carPlus 首頁
│  ├─ App.vue
│  ├─ main.ts
│  └─ style.css
├─ index.html
├─ tailwind.config.ts
├─ postcss.config.cjs
├─ vite.config.ts
├─ tsconfig.json
└─ vite-env.d.ts
```

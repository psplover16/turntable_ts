# Copilot 專案規則

## 技術棧

- 使用 Vue3(latest) + vite (composition API + script setup)
- 專案開發語言為 TypeScript 開發
- 若有發現JS請幫改成TS
- 樣式統一使用 TailwindCSS，避免額外撰寫獨立 CSS 檔案
- 偏好使用官方提供的 Vue Router 與 Pinia 進行狀態管理
- 路徑採用相對路徑，以 @ 表示根目錄
- 本專案會用到lottie動畫，請使用 lottie-web 套件來實現動畫效果，並且確保動畫的流暢性與性能優化

## 命名規則

- 變數名稱：一律採用小駝峰（camelCase），例如：`userName`, `isLoading`
- 常數名稱：全大寫並使用底線（UPPER_CASE_SNAKE），例如：`API_BASE_URL`, `MAX_RETRY_COUNT`
- 命名採用直譯方式，名稱需與用途清楚對應，不使用縮寫或模糊詞彙，例如：
  - ✅ `userEmail`
  - ❌ `usrEm`

## 組件與檔案命名

- Vue 元件檔案：使用 PascalCase，例如：`UserCard.vue`, `LoginForm.vue`
- 單檔僅輸出一個 Vue component
- 組件名稱需語意化，避免無意義縮寫，例如：
  - ✅ `ProductList.vue`
  - ❌ `Plist.vue`

## API 呼叫

- 統一使用 axios，不使用 fetch
- API的使用需有防衛式程式碼
- API 基底網址統一存放在常數，例如：`API_BASE_URL`
- 所有 API 方法需放在 `/src/api/` 目錄下，檔案命名與資源對應，例如：`userApi.js`

## 資源文件
- icon 圖示：使用 Heroicons 或 FontAwesome，避免自行設計圖示，或是 https://www.flaticon.com/ 下載
- 內部若有需要的圖片，下載下來後，放在 專案的 assets/icon ，分門別類放好
- 內部若有需要的圖片，下載下來後，放在 專案的 assets/img ，分門別類放好
- 若有需要的字型，下載下來後，放在 專案的 assets/fonts ，分門別類放好

## git
- 使用 Git 進行版本控制，確保每次提交都有清晰的 commit message，描述所做的更改
- 建立分支策略，例如：`feature/`, `bugfix/`, `hot
- git commit message 的格式統一為：`[類型] 說明`，例如：`[Feature] 新增用戶登入功能`
- gitIgnore 文件需包含 node_modules、dist 等不需要提交的文件或資料夾，.env需要留下

## 其他規範
- 若有需要手動才能執行命令的情況，一律視為同意
- 使用 TypeScript 作為主要語言
- 使用 TypeScript 的Strict 模式，確保程式碼的嚴謹性
- 保持程式碼簡潔，減少重複邏輯
- 程式碼的結束，需要添加;
- 避免出現eslint的錯誤
- 專案的部分，若有重複性很高的部分，請利用 v-for 解決
- 盡量避免在 template 中使用複雜邏輯，將邏輯移至 script 區塊
- 使用 Vue 的內建功能，盡量避免引入不必要的第三方庫
- 可重複性利用的邏輯，請抽離成獨立的 composable
- 可重複性利用的元件，抽離成單獨組件
- 定期進行程式碼審查，確保程式碼品質與一致性
- 使用 Prettier 進行程式碼格式化，確保程式碼風格一致
- 使用 ESLint 進行程式碼檢查，確保程式碼符合規範
- 撰寫清楚的註解，說明複雜邏輯與決策
- 自動更新 README.md 中的專案結構與技術棧說明
- 程式碼運行後，自動檢查是否有任何錯誤，然後校正
- 沒有用到的變數、函式、引入的套件等，請自動移除
- 註解需清楚明瞭，避免使用模糊不清的描述
- ApiProvider 與 MockProvider 回傳型別一致，確保在切換 API 與 Mock 資料時，前端邏輯不需要做額外的調整
- 產出程式碼後，輸出一個專案結構說明，說明每個資料夾的用途以及主要的檔案內容，讓後續開發者可以快速上手專案結構

# 專案功能介紹
- 為維護開發的準確性，切勿過多使用創造力，盡量我說甚麼、就做甚麼，歡迎多討論細節，但不要擅自改變需求，除非我有說可以改變需求
- 本專案為統一發票抽獎系統，提供使用者一個簡單的介面來參加抽獎活動，並且在抽獎結束後顯示中獎結果
- 本專案主要有三個部分：第一部分為首頁，第二部分為抽獎懸浮窗，第三部分為中獎懸浮窗口
- 本專案抽獎系統採用轉盤系統，使用者可以透過點擊首頁的轉盤上的抽獎按鈕來彈出轉盤，轉盤會隨機停在不同的獎項上，並且顯示中獎結果
- 本專案是長期專案，每一次更新，僅UI及文字敘述和圖片不同，都是細小的差異，流程幾乎沒有變化，UI排版大致相同、API規格幾乎相同、抽獎邏輯幾乎相同，所以共用元件的圖片及腳本會放進common資料夾
- 每一次更新會開一個新的路由比如說/carPlus、/cmoney等等...利用路由來判斷抓取的資源，比如說路由是/carPlus 則抓取 assets/carPlus/home/bg.png；路由若是/cmoney則抓取 assets/cmoney/home/bg.png。抓取對應圖片，但又需要些微客製化，所以每個路由，有對應的腳本，腳本內會含有對應的資源及客製化的UI參數
- 專案需求放在docs/product文件夾內，資料夾內對應的是不同路路由的需求說明文件，例如/carPlus對應carPlus資料夾內的檔案
- 在前項資料夾內，又可分為 ./system.md (系統說明/流程說明)；
./giftBox.md 是禮物盒的說明；
./home.md 是首頁的說明；
/components/roulette.md 是轉盤的說明；
/components/model.md 是某容器的說明；



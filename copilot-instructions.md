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


# 專案功能介紹
- 本專案為統一發票抽獎系統，提供使用者一個簡單的介面來參加抽獎活動，並且在抽獎結束後顯示中獎結果
- 本專案主要有三個部分：第一部分為首頁，第二部分為抽獎懸浮窗，第三部分為中獎懸浮窗口
- 本專案抽獎系統採用轉盤系統，使用者可以透過點擊首頁的轉盤上的抽獎按鈕來彈出轉盤，轉盤會隨機停在不同的獎項上，並且顯示中獎結果

## 首頁
- 首頁有多個區塊，共可分為左上、右上、中間、下方共四個區塊
- 左上區塊為本次抽獎的發票期間，右上角則是固定的提示窗口，中間區塊則是抽獎的主要區域(包含一個本次抽獎主題圖片以及抽獎轉盤)，下方比較複雜，後續說明。
- 右上提示窗口的下方有一張提示圖片，會在右上顯示完成後，才出現
- 如果使用者沒有抽過，則轉盤角度會顯示為0度，並且轉盤上會有一個抽獎按鈕，使用者點擊後會彈出抽獎懸浮窗，並且開始轉動轉盤
- 如果使用者已經抽過，則轉盤會停在上次抽獎的獎項上，並且轉盤上的抽獎按鈕會更換為領獎按鈕，使用者點擊後會彈出中獎懸浮窗口，顯示中獎結果的詳細細節

# 首頁中間區塊

# 首頁下方
- 首頁下方由上至下分別是 活動規則、招商廣告、領獎步驟、活動細則
- 活動規則、領獎步驟兩者互斥，沒抽獎過的使用者會看到活動規則，抽過獎的使用者則會看到領獎步驟
- 招商廣告是抽獎過的才看的到
- 活動細則則是所有使用者都可以看到，有收納功能

## 抽獎懸浮窗
- 抽獎懸浮窗會覆蓋整個畫面，並且會有一個半透明的背景，讓使用者可以專注在抽獎的過程中
- 抽獎懸浮窗會在使用者點擊首頁的抽獎後被呼叫，並且會顯示一個轉盤，直接開始轉動，轉盤會隨機停在API指定的的獎項上，並且在轉盤停止後顯示中獎結果的詳細細節
- 抽獎懸浮窗需沒有關閉按鈕，使用者必須完整觀看抽獎過程，直到轉盤停止並且顯示中獎結果後，才會有一個確認按鈕，使用者點擊後才會關閉抽獎懸浮窗，並且開啟中獎懸浮窗口
- 確認按鈕需在轉盤停止後約0.5秒才會出現，並且需要有一個淡入的動畫效果，會出現在轉盤的正中間，並且需要有一個明顯的提示，例如：閃爍、放大縮小等動畫效果，吸引使用者的注意力


## 轉盤
- 轉盤上的按鈕預設為抽獎按鈕，如果有抽過獎，則按鈕為領獎按鈕。
- 使用者一抽獎馬上會去判斷得到哪個獎項，然後根據獎項不同，最後會停留在的地方不同
- 轉盤在旋轉的過程，抽獎按鈕會被隱藏，轉動轉盤的動畫需要流暢，轉速由慢至快，再慢慢停止至希望的獎項上，轉盤停止後會先覆蓋遮罩至沒有得獎的獎項上，有得獎的獎項則是會更換背景圖片。
約0.5秒會有一個煙火lottie動畫的提示，煙火請以寬度滿版置頂的方式呈現，然後在轉盤中間出現領獎按鈕，使用者點擊後會開啟中獎懸浮窗口，顯示中獎結果的詳細細節
- 轉盤指針指向的是得到的獎項，但並不要剛剛好指向獎項的正中央，會有一個偏移，讓整體視覺效果更好看
- 抽獎懸浮窗的轉盤UI與首頁的轉盤UI非常相近，但仍會有些許不同，需要做成相同元件，但可以透過 props 來控制細部的差異，例如：轉盤的大小、轉盤中心按鈕的文字、轉盤中心按鈕的功能等
- 首頁的轉盤 與 抽獎懸浮窗的轉盤，兩者資料互相不隸屬，但是在抽獎懸浮窗的轉盤完整實現抽獎過程後，首頁的轉盤會更新狀態，顯示抽獎結果(停在抽中的獎項上，並且按鈕從抽獎按鈕變成領獎按鈕)，這樣就可以確保首頁的轉盤與抽獎懸浮窗的轉盤資料互相獨立，但又能夠在抽獎過程中互相影響
- 獎項一定是4等分，目前轉盤獎項會由圖片提供，旋轉完畢


## 中獎懸浮窗口
- 中獎懸浮窗口同樣會覆蓋整個畫面，並且會有一個半透明的背景，讓使用者可以專注在中獎結果的細節上，所以可以把 被透明的背景當作容器，把抽獎懸浮窗 與 中獎懸浮窗口包起來
- 中獎懸浮窗口會在使用者點擊轉盤上的領獎按鈕後被呼叫(不論是首頁的或是抽獎懸浮窗的)，並且會顯示中獎結果的詳細細節，例如：得獎名稱、獎項圖片、領獎步驟等
- 中獎懸浮窗口需要有一個明顯的關閉按鈕，使用者點擊後會關閉中獎懸浮窗口，並且回到首頁
- 中獎懸浮窗口的UI主要分為兩部分，上半部為得獎名稱及獎項圖片，下半部則是領獎步驟的說明
- 中獎懸浮窗口開啟時，會用動畫的方式開啟，一開始下半部是高度為0，看不見內容的，上半部則是水平垂直置中。然後慢慢展開到正常高度，下半部高度慢慢展開的同時，上半部會慢慢被下半部推擠到上方，最後整個中獎懸浮窗口會停在畫面正中央，整體的動畫需要流暢且有彈性

## 專案需求
- 本專案是手機webView的專案，所以手機端會傳入一些參數，例如任務ID、本次抽獎發票期數、手機安全範圍、網頁要與後端溝通驗證需要的JWT等等...所以需要設置一個專門的模組來處理這些參數的解析，並且將解析後的結果存放在全局狀態管理中，讓整個專案都可以方便地使用這些參數，這個模組必須要有刷新JWT的功能，確保JWT在過期後可以自動刷新，並且在每次呼叫API時都會自動帶上最新的JWT來進行驗證
- 本專案需要考慮手機安全範圍的問題，確保所有的UI元素都在安全範圍內，避免出現UI被遮擋或是無法點擊的情況
- 本專案的API接口需要有一個統一的模組來處理API的呼叫，並且確保在每次呼叫API時，都會自動帶上JWT來進行驗證並且攜帶手機端帶過來的taskId，並且把API的結果統一放入pinia統一管理與調用
- 請透過.env當中的VITE_USE_API變數來控制是否要使用API來獲取資料，如果VITE_USE_API為false，則會使用本地的假資料來進行開發，這樣就可以確保在API尚未完成或是有問題的情況下，仍然可以進行前端的開發工作
- 本專案是常駐活動，會透過定期更新的方式來更新抽獎的獎項以及抽獎的主題，使用者可以隨時參加抽獎活動，並且查看歷史中獎紀錄以及活動守則，所以必須確保專案的穩定性以及可擴充性
- 後續更新主要是透過API及更換圖片的方式進行，也時候甚至是多個主題同時要使用，所以每次主題的UI都要保留下來，預計會透過擴展新的路由方式來實現各個主題的UI及排版和API接口的差異
- 所以專案的資源管理會切分資料夾來進行管理，不同活動的圖片資源會放在不同的資料夾中，並且會有一個統一的命名規則來管理這些資源，例如：`turntable_theme1.png`, `turntable_theme2.png` 等等，透過切換路由來進行不同主題的UI展示
- API接口的差異則是Domain的差異，會透過判斷不同的路由來切換不同的API接口，比如: /components/schemas/ActivityDetailResponse 中的 domain 來切換不同的API接口，這樣就可以確保不同主題的UI及API接口的差異化，詳細的API規則我寫在api-spec/openapi.yaml中，請參考該文件來實現API接口的呼叫
- 目前在.env有兩個變數，分別是 VITE_API_BASE_URL 以及 VITE_USE_API，前者是API的基底網址，後者則是控制是否要使用API來獲取資料，如果VITE_USE_API為false，則會使用本地的假資料來進行開發，這樣就可以確保在API尚未完成或是有問題的情況下，仍然可以進行前端的開發工作
- 假資料目前在 /src/mock 資料夾中，會有不同主題的假資料，需要你轉換成typescript的格式，dummy.js主要有四隻函數，分別是 getWebConfigDummy、getActivityDetailDummy、drawDummy、getDummyJWT，四個分別對應手機端的參數模擬、本次活動的詳細資訊(包含轉盤獎項)、抽獎結果的模擬以及JWT的模擬
- 由於專案會有多個主題，模擬的資料結果會有所不同，所以會有多個不同主題的假資料文件，這些文件會放在 /src/mock/detail 資料夾中，命名規則為主題名稱加上 .js，例如：theme1.js、theme2.js等等，這些文件中的資料格式會與路由名稱一致，例如：/activity/theme1 對應 theme1.js，/activity/theme2 對應 theme2.js，這樣就可以確保在切換不同主題的路由時，可以自動載入對應的假資料文件。
- dummy.js的drawDummy，會透過activityRouteUtils.js的函數redeemedReward來判斷要抓取哪個detaul內部的假資料來模擬抽獎結果
- 首頁/抽獎懸浮窗/中獎懸浮窗口三者的圖片要用到再引入即可，但是要等到圖片確實引入，才執行後續動作，也就是圖片要確實引入後，才執行css的animation或js事件
- 首頁內的區塊，要在一開始進入的時候有依序打開的效果，從左上、右上、右上提示窗口的下方有一張提示圖片、中間、下方的順序依序打開，並且每個區塊的打開都要有一個淡入的動畫效果，讓整體的視覺效果更好看
- 每個主題都有一個屬於他們自己的主題顏色及資源
- 產出程式碼後，輸出一個專案結構說明，說明每個資料夾的用途以及主要的檔案內容，讓後續開發者可以快速上手專案結構

## 長期需求
- 本專案是長期專案，每一次更新，僅UI及文字敘述和圖片不同，都是細小的差異，流程幾乎沒有變化，UI排版大致相同、API規格幾乎相同、抽獎邏輯幾乎相同，所以共用元件的圖片及腳本會放進common資料夾
- 每一次更新會開一個新的路由比如說/carPlus、/cmoney等等...利用路由來判斷抓取的資源，比如說 抓取 assets/carPlus/home/bg.png，以抓取對應圖片，但又需要些微客製化，所以要改用設定檔當設定，把每個專案抽象成一個 config object

## 專案主題，本專案至少會有兩個主題，會在後續新增，第一個主題為 carPlus，第二個主題為speak
以下是他們的FigmaMcp資源
# 圖片引用下載區(圖片的下載與引用，請用此區提供的圖片，並以2倍圖的方式下載，確保在手機端的顯示品質)
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13999-66855&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13393-36166&m=dev

# 首頁-整體的排版(已經抽過獎，活動細節打開的狀態)
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13881-57030&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13266-29789&m=dev
# 首頁-整體的排版(尚未抽獎，活動細節收起的狀態)
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=14005-184384&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13268-34355&m=dev
# 首頁-左上的排版
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=14005-184658&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13268-34768&m=dev
# 首頁-右上的排版
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=14005-184672&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13268-34779&m=dev
# 首頁-中間的排版
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=14005-184729&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13268-40017&m=dev

# 首頁-除了下方以外上半部分完整排版(尚未抽獎的狀態)
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13881-49871&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13268-38334&m=dev

# 抽獎懸浮窗的示意圖(模擬獎項旋轉的樣子，但是實際旋轉使用程式的旋轉呈現)
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13914-71856&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13266-30480&m=dev
# 中獎懸浮窗口的排版(示意圖，實際內容以API回傳的資料為主，這邊主要是參考整體的排版樣式以及動畫呈現方式)
- carPlus:Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13914-69849&m=dev
- speak: Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=13273-92180&m=dev

# 其他資源
- 煙火lottie動畫，兩個主題都一樣，目前放在src/assets/lottie/fireworks.json
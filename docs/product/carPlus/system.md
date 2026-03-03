## 專案說明
# 說明：本專案是App內嵌的webView專案
# 所需資料格式：目前在 /src/mock 資料夾中，有不同主題的假資料。dummy.js主要有四隻函數，分別是 getWebConfigDummy、getActivityDetailDummy、drawDummy、getDummyJWT，四個分別對應手機端的參數模擬、本次活動的詳細資訊(包含轉盤獎項)、抽獎結果的模擬以及JWT的模擬
# 由於專案會有多個主題，模擬的資料結果會有所不同，所以會有多個不同主題的假資料文件，這些文件目前會放在 /src/mock/detail 資料夾中，命名規則為主題名稱加上 .js，例如：carPlus.js、speak.js等等，這些文件中的資料格式會與路由相對應，例如：/activity/theme1 對應 theme1.js，/activity/theme2 對應 theme2.js，這樣就可以確保在切換不同主題的路由時，可以自動載入對應的假資料文件。但由於目前是js檔案，請轉換成ta檔，放到/src/mocks/detail資料夾中
# 手機端會傳入一些參數，需要個特別的store或pinia來儲存/修改手機端發送過來的資料，但是.env當中的VITE_USE_API為false時，用dummy.js的getWebConfigDummy

所以需要設置一個專門的模組來處理這些參數的解析，並且將解析後的結果存放在全局狀態管理中，讓整個專案都可以方便地使用這些參數，這個模組必須要有刷新JWT的功能，確保JWT在過期後可以自動刷新，並且在每次呼叫API時都會自動帶上最新的JWT來進行驗證


## 專案整體架構及模組

# 路由
- 本專案要長期更新，許多資源(圖片/API等等...)高度依賴路由
- 路由的劃分會依據不同路由來決定不同樣式，比如說/carPlus，就會轉跳到/carPlus內部的children進行動作；/speed就會轉跳到/speed的children，路由的不同抓取的API網址前綴也不同且後續圖片的引用也不同。也由於有可能對UI進行細部調整，所以需要用外部設定檔，方便後續做細部調整。
- 每個路由可能有自己專屬的UI樣式

# 手機應用模組(模組分為二部分)：
- 第一部分為 專門用來呼叫及接收手機事件的模組，模組名稱為msgMobile
- 第二部分，儲存手機傳送過來的參數的pinia，方便後續引用。手機傳過來的資料原則上不更新，除了JWT可能會有過期問題，需要更新。模組名稱為useMobileData
- 在網頁一進入最先呼叫msgMobile，把手機的詳細參數、JWT儲存在useMobileData
- 利用env的VITE_USE_API來決定是否使用呼叫手機模組，或是直接引用/mock/dummy內部的getWebConfigDummy函數及getDummyJWT，來當作模擬手機事件獲取手機參數及JWT
- msgMobile模組，目前階段詳細不用做。但模組外觀要做，內部直接使用getWebConfigDummy函數即可。


# API模組：
- 模組可以用pinia完成
- 本專案一共2隻API，分別是取得全部資料(包含上次得獎資訊/每個獎項的資料/詳細說明等等...)和抽獎
- API都必須傳送JWT及手機端傳送過來的taskId，JWT及taskId，可以在手機應用模組useMobileData取得
- 本專案的API接口需要有一個統一的模組來處理API的呼叫，並且確保在每次呼叫API時，都會自動帶上JWT來進行驗證並且攜帶手機端帶過來的taskId，並且把API的結果統一放入pinia統一管理與調用，若JWT過期，則觸發msgMobile與手機重新取得JWT
- 利用env的VITE_USE_API來決定是否使用API，或是直接引用/mock/dummy內部的函數 getActivityDetailDummy(取得轉盤獎項/取得詳細資料)/drawDummy(取得抽獎資訊)來進行模擬
- dummy.ts的drawDummy，會透過activityRouteUtils.ts的函數redeemedReward來判斷要抓取哪個detaul內部的假資料來模擬抽獎結果
- 以getActivityDetailDummy為例子，redeemedScratchReward若有物件，表示有抽過獎，獎項內容就是內部的物件
- 目前在.env有兩個變數，分別是 VITE_API_BASE_URL 以及 VITE_USE_API，前者是API的基底網址，後者則是控制是否要使用API來獲取資料，如果VITE_USE_API為false，則會使用本地的假資料來進行開發，這樣就可以確保在API尚未完成或是有問題的情況下，仍然可以進行前端的開發工作


# 手機主題：
- 本專案是手機webView的專案，所以本專案需要考慮手機安全範圍的問題，確保所有的UI元素都在安全範圍內，避免出現UI被遮擋或是無法點擊的情況
- 本專案是常駐活動，會透過定期更新的方式來更新抽獎的獎項以及抽獎的主題，使用者可以隨時參加抽獎活動，並且查看歷史中獎紀錄以及活動守則，所以必須確保專案的穩定性以及可擴充性



# 需求模板（單頁）

## 基本資訊
- 頁面名稱：轉盤
- 主題（carPlus / speak / 其他）：carPlus
- 對應 Figma 節點（node-id）(有2個)：
Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=14010-52560&m=dev
Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=14010-48740&m=dev
- 路由：
- 種類：組件
- 應用：首頁 及 抽獎頁面



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



- 後續更新主要是透過API及更換圖片的方式進行，也時候甚至是多個主題同時要使用，所以每次主題的UI都要保留下來，預計會透過擴展新的路由方式來實現各個主題的UI及排版和API接口的差異
- 所以專案的資源管理會切分資料夾來進行管理，不同活動的圖片資源會放在不同的資料夾中，並且會有一個統一的命名規則來管理這些資源，例如：`turntable_theme1.png`, `turntable_theme2.png` 等等，透過切換路由來進行不同主題的UI展示





- 首頁/抽獎懸浮窗/中獎懸浮窗口三者的圖片要用到再引入即可，但是要等到圖片確實引入，才執行後續動作，也就是圖片要確實引入後，才執行css的animation或js事件
- 首頁內的區塊，要在一開始進入的時候有依序打開的效果，從左上、右上、右上提示窗口的下方有一張提示圖片、中間、下方的順序依序打開，並且每個區塊的打開都要有一個淡入的動畫效果，讓整體的視覺效果更好看
- 每個主題都有一個屬於他們自己的主題顏色及資源



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
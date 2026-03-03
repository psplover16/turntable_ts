# 需求模板（首頁）

## 基本資訊
- 頁面名稱：首頁
- 主題（carPlus / speak / 其他）：carPlus
- 對應 Figma 節點（node-id）(有2個)：
Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=14010-52560&m=dev
Implement this design from Figma.
@https://www.figma.com/design/WoZGm2wd2BpzM9MuCvv7YQ/2026_%E7%99%BE%E8%90%AC%E5%AE%89%E6%85%B0%E7%8D%8E?node-id=14010-48740&m=dev
- 路由：/home
- 種類：view
- 應用：



## 說明
# 首頁
- 首頁有多個區塊，共可分為左上、右上、中間、下方共四個區塊
- 左上區塊為本次抽獎的發票期間，右上角則是固定的提示窗口，中間區塊則是抽獎的主要區域(包含一個本次抽獎主題圖片以及抽獎轉盤)，下方比較複雜，後續說明。
- 右上提示窗口的下方有一張提示圖片，會在右上顯示完成後，才出現
- 如果使用者沒有抽過，則轉盤角度會顯示為0度，並且轉盤上會有一個抽獎按鈕，使用者點擊後會彈出抽獎懸浮窗，並且開始轉動轉盤
- 如果使用者已經抽過，則轉盤會停在上次抽獎的獎項上，並且轉盤上的抽獎按鈕會更換為領獎按鈕，使用者點擊後會彈出中獎懸浮窗口，顯示中獎結果的詳細細節




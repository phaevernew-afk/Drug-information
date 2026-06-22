# 本院用藥查詢系統

掛載於 GitHub Pages 的靜態藥品查詢網站。

## 檔案說明

| 檔案 | 說明 |
|------|------|
| `index.html` | 主查詢介面（藥品資料已內嵌） |
| `admin.html` | 後台管理介面（新增/修改/匯出） |
| `drugs.json` | 藥品原始資料（可獨立更新） |
| `README.md` | 本說明文件 |

## 上線步驟

1. 在 GitHub 建立新 repository（例如 `hospital-drugs`）
2. 上傳全部檔案
3. 進入 **Settings → Pages → Branch: main → Save**
4. 等約 1 分鐘，網址：`https://你的帳號.github.io/hospital-drugs/`

## 更新藥品資料

### 方法一：直接修改 JSON（推薦）
1. 開啟 `drugs.json` 於 Excel 或 VS Code 修改
2. 重新執行轉換腳本產生新的 `index.html`，上傳覆蓋

### 方法二：透過後台編輯
1. 開啟 `admin.html` → 匯入 `drugs.json`
2. 在瀏覽器中新增/修改藥品
3. 點「匯出 JSON」→ 取得新的 `drugs.json`
4. 上傳覆蓋 GitHub 上的 `drugs.json`
5. 重新產生並上傳 `index.html`

## 欄位說明

藥品資料對應原 Excel 欄位：
- drug / name / cname / generic / brand / trade
- idx1 / idx2 / idx3（索引代碼）
- cat（藥理分類）
- indication（適應症）
- dosage（用法用量）
- pharm（藥理作用）
- sideEffect（副作用）
- caution（注意事項）
- preg（孕婦分級 A/B/C/D/X）
- appearance（外觀）
- note（備註）

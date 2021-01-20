/* eslint-disable camelcase */
export type Common = {
  /********
   * 共用
   ********/
  /** 起日 */
  start_date: string
  /** 訖日 */
  end_date: string
  /** 請輸入起日 */
  enter_start_date: string
  /** 請輸入訖日 */
  enter_end_date: string
  /** 至 */
  to: string
  /** 起迄日期 */
  start_end_date: string
  /** 單位 */
  unit: string
  /** 無資料 */
  no_data: string
  /** 建議瀏覽器版本 */
  recommend_browser_label: string

  /********
   * Search
   ********/
  /** 按鈕 - 查詢 */
  search_btn_search: string
  /** 按鈕 - 搜尋 */
  search_btn_find: string
  /** 按鈕 - 清除 */
  search_btn_clear: string
  /** 按鈕 - 下載 */
  download: string

  /********
   * Common
   ********/
  /** 新增 */
  create: string
  /** 刪除 */
  delete: string
  /** 編輯 */
  edit: string
  /** 更新 */
  update: string
  /** 儲存 */
  save: string
  /** 送出 */
  submit: string
  /** 查看 */
  view: string
  /** 處理 */
  handle: string
  /** 異動 */
  modify: string
  /** 選擇 */
  select: string
  /** 確定 */
  confirm: string
  /** 取消 */
  cancel: string
  /** 關閉 */
  close: string
  /** 設定 */
  settings: string
  /** 複製 */
  copy: string
  /** 是 */
  yes: string
  /** 否 */
  no: string
  /** 可 */
  can: string
  /** 不可 */
  can_not: string
  /** 後台管理 */
  admin: string
  /** 返回前台 */
  to_homepage: string
  /** 登出 */
  logout: string
  /** 登入 */
  login: string
  /** 欄位為必填 */
  fields_are_required: string
  /** 請輸入 */
  please_enter: string
  /** 請填寫 */
  please_fill_in: string

  /********
   * 所有選單類型
   ********/
  /** 下拉選單 - 全部 */
  all: string
  /** 下拉選單 - 沒有資料 */
  select_list_no_data: string
  /** 下拉選單 - 查無資料 */
  select_list_search_no_data: string
  /** DatePicker - 選擇日期 */
  select_date: string
  /** 下拉選單 - 請選擇 */
  please_select: string
}

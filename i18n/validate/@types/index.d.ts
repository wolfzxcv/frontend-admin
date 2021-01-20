/* eslint-disable camelcase */
export type Message = {
  /** 需與某欄位相等（例：密碼確認） */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  confirmed: (field: string) => string
  /** 信箱 */
  email: string
  /** 檔案上傳數量限制 */
  file_count: string
  /** 單一新增檔案大小限制 (MB) */
  new_file_single_size_max: string
  /** 必填 */
  required: string
  /** 最大字數限制 */
  max: string
  /** 最小字數限制 */
  min: string
  /** 日期大於某欄位 */
  date_after: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    field: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: { target: string; inclusion: boolean }
  ) => string
  /** 日期小於某欄位 */
  date_before: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    field: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: { target: string; inclusion: boolean }
  ) => string
}

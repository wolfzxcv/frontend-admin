/* eslint-disable camelcase */
export type Reservation = {
  /********
   * 預約系統
   ********/
  /** 預約系統 */
  reservation: string
  /** 切換模式 */
  switch_mode: string
  /** 可設定未來2週的時間 */
  incoming_time_is_editable: string
  /** 加入時間 */
  add_time: string
  /** 顯示所有日期及時間 */
  timetable_details: string
  /** 點擊刪除 */
  click_to_delete: string
}

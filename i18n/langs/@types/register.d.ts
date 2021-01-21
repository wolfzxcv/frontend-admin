/* eslint-disable camelcase */
export type Register = {
  /********
   * 註冊及登入頁面
   ********/
  /** 用戶名稱 */
  username: string
  /** 密碼 */
  password: string
  /** 確認密碼 */
  confirm_password: string
  /** 驗證碼 */
  verification_code: string
  /** 忘記密碼 */
  forgot_password: string
  /** 註冊會員 */
  registration: string
  /** 註冊 */
  register: string
  /** 已經有帳號  */
  already_have_an_account: string
  /** 大頭貼 */
  profile_picture: string
  /** 出生西元年月日 */
  birthday: string
}

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  hello: Scalars['String']
  reservations: Array<Timetable>
  reservation: Reservation
  users: Array<User>
  user: User
  login: LoginUser
  refreshToken: Token
}

export type QueryReservationArgs = {
  time: Scalars['String']
  date: Scalars['String']
}

export type QueryUserArgs = {
  username: Scalars['String']
}

export type QueryLoginArgs = {
  password: Scalars['String']
  username: Scalars['String']
}

/** 多筆,給前端的日期時間 */
export type Timetable = {
  __typename?: 'Timetable'
  date: Scalars['String']
  timeList: Array<TimeList>
}

export type TimeList = {
  __typename?: 'TimeList'
  time: Scalars['String']
  isBooked: Scalars['Boolean']
  info: Info
}

export type Info = {
  __typename?: 'Info'
  name: Scalars['String']
  tel: Scalars['String']
  remarks: Scalars['String']
}

/** 資料庫的日期時間 */
export type Reservation = {
  __typename?: 'Reservation'
  date: Scalars['String']
  time: Scalars['String']
  isBooked: Scalars['Boolean']
  name: Scalars['String']
  tel: Scalars['String']
  remarks: Scalars['String']
}

/** 使用者資訊 */
export type User = {
  __typename?: 'User'
  id: Scalars['String']
  username: Scalars['String']
  password: Scalars['String']
  email: Scalars['String']
  imageUUID: Scalars['String']
  birthday: Scalars['String']
  role: Scalars['String']
  createAt: Scalars['String']
  updateAt: Scalars['String']
  isEnabled: Scalars['Boolean']
}

export type LoginUser = {
  __typename?: 'LoginUser'
  id: Scalars['String']
  username: Scalars['String']
  password: Scalars['String']
  email: Scalars['String']
  imageUUID: Scalars['String']
  birthday: Scalars['String']
  role: Scalars['String']
  createAt: Scalars['String']
  updateAt: Scalars['String']
  isEnabled: Scalars['Boolean']
  accessToken: Scalars['String']
  refreshToken: Scalars['String']
}

/** Token */
export type Token = {
  __typename?: 'Token'
  accessToken: Scalars['String']
  refreshToken: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createReservations: Scalars['String']
  updateReservation: Scalars['String']
  register: User
  updateUser: Scalars['String']
  deleteUser: Scalars['String']
}

export type MutationCreateReservationsArgs = {
  options: Array<ReservationsInput>
}

export type MutationUpdateReservationArgs = {
  input: ReservationInput
}

export type MutationRegisterArgs = {
  options: RegisterInput
}

export type MutationUpdateUserArgs = {
  input: UpdateInput
  username: Scalars['String']
}

export type MutationDeleteUserArgs = {
  username: Scalars['String']
}

/** create,給API的日期時間格式 */
export type ReservationsInput = {
  date: Scalars['String']
  timeList: Array<TimeListInput>
}

export type TimeListInput = {
  time: Scalars['String']
  isBooked: Scalars['Boolean']
  info?: Maybe<InfoInput>
}

export type InfoInput = {
  name?: Maybe<Scalars['String']>
  tel?: Maybe<Scalars['String']>
  remarks?: Maybe<Scalars['String']>
}

/** update,給API的日期時間格式 */
export type ReservationInput = {
  date: Scalars['String']
  time: Scalars['String']
  isBooked: Scalars['Boolean']
  name?: Maybe<Scalars['String']>
  tel?: Maybe<Scalars['String']>
  remarks?: Maybe<Scalars['String']>
}

/** 註冊帳號 */
export type RegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  confirmPassword: Scalars['String']
  imageUUID?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['String']>
}

/** 更新帳號資料 */
export type UpdateInput = {
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  imageUUID?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
}

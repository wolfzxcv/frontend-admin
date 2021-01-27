import Table from './components/Table.vue'

export type TableType = InstanceType<typeof Table>

export type ComponentName = 'Form' | 'Table'

/** 表格欄位資訊 */
export interface TableColumns {
  /** 標題class */
  titleClass?: Object
  /** 標題inline樣式 */
  titleStyle?: Object
  /** 欄位標題 */
  title?: string
  /** 內容class */
  contentClass?: Object
  /** 內容inline樣式 */
  contentStyle?: Object
  /** 欄位資料識別欄位 */
  dataIndex?: string
  /** 格式化資料 */
  format?: (value?: any, data?: any) => any
  /** 客製化內容 */
  slot?: any
}

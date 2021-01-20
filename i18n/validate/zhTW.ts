import { Message } from './@types'

const zhTW: Message = {
  confirmed(field: string) {
    return `與 ${field.split(',')[0]} 不相符`
  },
  email: '請輸入正確的信箱格式',
  file_count: '最多上傳 {length} 份檔案',
  new_file_single_size_max: '每個檔案最大 {size} MB',
  max: '需要小於等於{length}字',
  min: '需要大於等於{length}字',
  required: '必填',
  date_after: (field, { target, inclusion }) =>
    `${field}必須大於${inclusion ? '等於' : ''}${target}`,
  date_before: (field, { target, inclusion }) =>
    `${field}必須小於${inclusion ? '等於' : ''}${target}`,
}

export default zhTW

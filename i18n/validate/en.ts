import { Message } from './@types'

const en: Message = {
  confirmed(field: string) {
    const list = field.split(',')
    return `${list[0]} and ${list[1]} must be the same.`
  },
  email: 'Must be a valid email address',
  max: 'Less than {length} characters',
  min: 'At least {length} characters',
  required: 'Required',
  file_count: 'Upload up to {length} files',
  new_file_single_size_max: 'Upload up to {size} MB',
  date_after: (field, { target, inclusion }) =>
    `The ${field} must be after ${inclusion ? 'or equal to ' : ''}${target}`,
  date_before: (field, { target, inclusion }) =>
    `The ${field} must be before ${inclusion ? 'or equal to ' : ''}${target}`,
}

export default en

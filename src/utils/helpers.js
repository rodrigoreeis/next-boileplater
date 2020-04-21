export const isObjectLength = obj =>
  Object.keys(obj).length

export const onlyNumbers = value =>
  value.match(/\d+/g).join('')

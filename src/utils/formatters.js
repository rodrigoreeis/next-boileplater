export const numberFormatter = ({
  style = 'decimal',
  value = 0,
  currency = 'BRL',
  decimals = 2,
  currencyDisplay = 'symbol',
}) => {
  return Intl.NumberFormat('pt-BR', {
    style,
    currency,
    currencyDisplay,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export const toCurrency = (value, options = {}) => {
  return numberFormatter({ value, style: 'currency', ...options })
}

export const toPercent = ({ value, ...props }) => {
  return numberFormatter({
    ...props,
    value: value / 100,
    style: 'percent',
  })
}

export const currencyToInt = (value) => Number(value.replace(/[^0-9]/g, ''))

export const toNumber = Number

export const toIsoDate = (value) => {
  if (!value) return ''

  if (value.split('/').length > 1 && value.length === 10) {
    const instances = value.split('/')
    const [day, month, year] = instances

    return `${year}-${month}-${day}`
  }

  return value
}

export const fromIsoDate = (value) => {
  if (!value) return ''

  if (value.split('-').length > 1 && value.length === 10) {
    const instances = value.split('-')
    const [year, month, day] = instances

    return `${day}/${month}/${year}`
  }

  return value
}

export const toRawValue = (value) => {
  if (!isNaN(value)) {
    return parseInt(value)
  } else if (value === 'true') {
    return true
  } else if (value === 'false') {
    return false
  } else {
    return value
  }
}

export const toCpf = (value) => {
  return value?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const toCellphone = (value) => {
  return value?.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export const toPostalCode = (value) => {
  return value?.replace(/(\d{5})(\d{3})/, '$1-$2')
}

export const googleId = (str) => str.replace(/GA[0-9]+\.[0-9]+\./g, '')

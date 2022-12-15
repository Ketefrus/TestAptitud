const locale = navigator.language

export const formatDateShort = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  return new Date(date).toLocaleDateString(locale, options)
}

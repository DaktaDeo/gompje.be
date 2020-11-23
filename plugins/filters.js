import Vue from 'vue'
import moment from 'moment'
// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('formatDateTimeLong', (date) => {
  if (date) {
    return moment(date).format('LLLL')
  }
  return '--'
})
// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('formatDateTimeIso', (date) => {
  if (date) {
    return `${moment(date).format('L')} ${moment(date).format('LT')}`
  }
  return '--'
})
// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('formatDateLong', (date) => {
  if (date) {
    return moment(date).format('LL')
  }
  return '--'
})
// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('formatDateIso', (date) => {
  if (date) {
    return moment(date).format('L')
  }
  return '--'
})
// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('formatTime', (date) => {
  if (date) {
    return moment(date).format('LT')
  }
  return '--'
})
// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('capitalize', (value) => {
  if (!value) return ''
  value = value.toString()
  // eslint-disable-next-line lodash/prefer-lodash-method
  return value.charAt(0).toUpperCase() + value.slice(1)
})
// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('truncate', (text, length, omission, separator) => {
  text = text || ''
  omission = omission || '...'
  length = length || 45
  separator = separator || ' '

  return _.truncate(text, { length, omission, separator })
})

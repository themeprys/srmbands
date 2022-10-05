import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['id-ID'], {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
})
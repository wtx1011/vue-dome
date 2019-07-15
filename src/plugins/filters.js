import Vue from 'vue'
import {
  formatDate
} from './format'

const filters = {
  formatDate
}

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

export default filters

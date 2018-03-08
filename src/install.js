import Vue from 'vue'
import components from './main'

components.forEach((component, name) => {
  Vue.component(name, component)
})

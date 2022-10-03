import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App.vue', () => {
    it('main Div exists', () => {
        const wrapper=mount(App)
        const div=wrapper.find('.mainDiv')
        expect(div.exists()).toBe(true)
    })
    it('Modal Not visible initially', () => {
        const wrapper=mount(App)
        const div=wrapper.find('.cmodal')
        expect(div.isVisible()).toBe(false)
    })
    it('text matches', () => {
        const wrapper=mount(App)
        const div=wrapper.find('#vueappheading')
        expect(div.text()).toBe('Friends App')
    })
  })

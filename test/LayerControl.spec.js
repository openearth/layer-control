import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import LayerControl from '../src/LayerControl.vue'

describe('LayerControl.vue', () => {
  it('is created', () => {
    const wrapper = shallow(LayerControl)
    expect(wrapper.find('div'))
  })
})

import { shallowMount } from '@vue/test-utils';
import {ProductForm} from '@/views/product-form.vue'

const wrapper = shallowMount(ProductForm)

describe('ProductForm.vue', () => {
  it('contains a add button ', () => {
   
    expect(wrapper.contains('button')).tobe(true)
  })
})
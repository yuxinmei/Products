import { shallowMount, mount } from "@vue/test-utils";
import ProductForm from "@/views/product-form.vue";
import Home from "@/views/home.vue";

let wrapper;

beforeEach(() => {
  wrapper = mount(ProductForm);
  wrapper.setData({
    name: "apple",
    stock: 200,
  })

})

describe("Parent", () => {
  it("does not render a Child component", () => {
    const wrapper = shallowMount(Home)

    expect(wrapper.findComponent({ name: "Child" }).exists()).toBe(false)
  })

})

describe('ProductForm', () => {
  
  it('has correct value', () => {
    expect(wrapper.vm.name).toBe("apple");
    expect(wrapper.vm.stock).toBe(200);
  })

  it('has a button', () => {
    wrapper = shallowMount(ProductForm)
    const btn = wrapper.find('.el-input')
    // expect(btn).toBe(true)
  })
})

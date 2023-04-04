import { shallowMount } from "@vue/test-utils"
import AboutView from '../../../src/views/AboutView.vue'

describe('Pruebas en el about View', () => {
    test('Debe renderizar el componente correctamente', () => {
        const wrapper =  shallowMount(AboutView)

        expect(wrapper.html()).toMatchSnapshot()
    })
})
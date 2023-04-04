import { shallowMount } from "@vue/test-utils";
import Fab from '../../../../../src/modules/daybook/components/FabComponent.vue';

describe('Pruebas en el componente Fab', () => {
    test('debe mostrar el icono por defecto', () => {
        const wrapper = shallowMount(Fab)
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-plus')).toBeTruthy()

    })

    test('debe mostrar el icono de por argumento: fa-circle', () => {
        const wrapper = shallowMount(Fab, {
            props: {
                icon: 'fa-circle'
            }
        })
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-circle')).toBeTruthy()
    })

    test('debe de emitir el evento on:click cuando se hace click',() => {
        const wrapper = shallowMount(Fab)

        wrapper.find('button').trigger('click')

        expect(wrapper.emitted('on:click')).toHaveLength(1)
    })
})
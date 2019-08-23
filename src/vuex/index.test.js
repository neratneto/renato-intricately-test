import { store } from '.'
import { shallowMount } from '@vue/test-utils'
import Menus from '../components/Menus.vue'
import Card from '../components/Card.vue'
import TextField from '../components/TextField.vue'

describe('changeTab Action', () => {
  it('Calls CHANGE_TAB mutation', () => {
    const commit = jest.fn()

    store.actions.changeTab({commit}, 'COMPANY TABLE')

    expect(commit).toHaveBeenCalledWith('CHANGE_TAB', 'COMPANY TABLE')
  })
})

describe('CHANGE_TAB Mutation', () => {
  it('Changes to Company Table tab', () => {
    const state = {
      selectedTab: 'COMPANY DATA'
    }

    store.mutations.CHANGE_TAB(state, 'COMPANY TABLE')

    expect(state).toEqual({
      selectedTab: 'COMPANY TABLE'
    })
  })
})

describe('Selected tab', () => {
  it('Renders a selected tab in the Menus component', () => {
    const wrapper = shallowMount(Menus, {
      mocks: {
        $store: {
          state: { selectedTab: 'COMPANY TABLE'}
        }
      }
    })

    expect(wrapper.find('.selected-tab').exists()).toBe(true)
  })
})

describe('Card title', () => {
  it('Renders a card with a title', () => {
    const wrapper = shallowMount(Card, {
      propsData: {
        title: 'Test Title'
      }
    })

    expect(wrapper.find('.title').text()).toBe('Test Title')
  })
})

describe('Text field label', () => {
  it('Renders a text field with a label', () => {
    const wrapper = shallowMount(TextField, {
      propsData: {
        label: 'Test Label'
      }
    })

    expect(wrapper.find('.label').text()).toBe('Test Label')
  })
})

import { GET_TABS, GET_MY_FONTS, GET_BUY_FONTS, SELECTE_ITEM, ACTIVE_FONT, ACTIVE_TAB } from './constants'

export const initialState = {
  tabs: [],
  fonts: [],
  content: '',
  selectedItem: {},
  activeFont: '',
  activeTab: '',
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
  case GET_TABS:
    return { ...state, tabs: payload.filter(i => i.label) }
  case GET_MY_FONTS:
    return { ...state, fonts: payload.content }
  case GET_BUY_FONTS:
    return { ...state, content: payload.content }
  case SELECTE_ITEM:
    return { ...state, selectedItem: payload }
  case ACTIVE_FONT:
    return { ...state, activeFont: payload }
  case ACTIVE_TAB:
    return { ...state, activeTab: payload }
  default:
    return state
  }
}

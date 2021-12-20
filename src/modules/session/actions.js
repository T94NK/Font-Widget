import api from 'api'
import { GET_TABS, GET_MY_FONTS, GET_BUY_FONTS, SELECTE_ITEM, ACTIVE_TAB, ACTIVE_FONT } from './constants'
import { notification, activeElementBlur } from 'utils'

const action = (type, payload) => ({ type, payload })

export const getTabs = () => dispatch => api.getTabs()
  .then(({ data }) => dispatch(action(GET_TABS, data)))
  .catch(() => notification('Error getting tabs'))

export const getMyFonts = () => dispatch => api.getMyFonts()
  .then(({ data }) => dispatch(action(GET_MY_FONTS, data)))
  .catch(() => notification('Error getting fonts'))

export const getBuyFonts = () => dispatch => api.getBuyFonts()
  .then(({ data }) => dispatch(action(GET_BUY_FONTS, data)))
  .catch(() => notification('Error getting text'))

export const selecteItem = item => dispatch => dispatch(action(SELECTE_ITEM, item))

export const selecteTab = item => dispatch => {
  dispatch(action(ACTIVE_TAB, item))
  dispatch(action(ACTIVE_FONT, ''))
  activeElementBlur()
}

export const selecteFont = item => dispatch => {
  dispatch(action(ACTIVE_FONT, item))
  dispatch(action(ACTIVE_TAB, ''))
  activeElementBlur()
}

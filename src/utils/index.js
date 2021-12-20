import { NotificationManager } from 'react-notifications'

export const notification = message => NotificationManager.error(message)

export const getUrl = label => `/${label.toLowerCase().replace(/ /ig, '-')}`

export const handlerMinus = (active, data) => active === '' ? data.length - 1 : active > 0 ? active - 1 : active

export const handlerPlus = (active, data) => active === '' ? 0 : active < data.length - 1 ? active + 1 : active

export const activeElementBlur = () => document.activeElement.blur()

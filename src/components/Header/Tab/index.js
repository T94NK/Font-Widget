import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import c from 'classnames'
import { getUrl } from 'utils'
import './index.scss'

const Tab = ({ label, isActive, handlerTab }) => {
  const { pathname } = useLocation()

  const url = getUrl(label)

  const handlerEnter = event => {
    if (event.which === 13) handlerTab(url)
  }

  return (
    <li
      className={c('tab', { active: pathname === url, activeTab: isActive })}
      tabIndex='0'
      onKeyPress={handlerEnter}
      onClick={() => handlerTab(url)}
    >
      {label}
    </li>
  )
}

export default memo(Tab)

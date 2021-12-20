import React, { useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { getTabs, selecteTab, selecteFont, selecteItem } from 'modules/session/actions'
import { handlerMinus, handlerPlus, getUrl } from 'utils'
import Tab from './Tab'
import './index.scss'

const Header = () => {
  const { tabs, activeTab } = useSelector(({ session }) => session)
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(getTabs())
  }, [dispatch])

  useEffect(() => {
    if (tabs.length) {
      window.addEventListener('keydown', handleUserKeyPress)
    }
    return () => {
      if (tabs.length) {
        window.removeEventListener('keydown', handleUserKeyPress)
      }
    }
  }, [tabs, activeTab])

  const handlerTab = url => {
    if (url !== pathname) history.push(url)
  }

  const resetActive = () => {
    dispatch(selecteFont(''))
    dispatch(selecteTab(''))
  }

  const handleUserKeyPress = event => {
    const key = event.keyCode

    const obj = {
      37: () => {
        const num = handlerMinus(activeTab, tabs)
        dispatch(selecteTab(num))
      },
      39: () => {
        const num = handlerPlus(activeTab, tabs)
        dispatch(selecteTab(num))
      },
      13: () => {
        if (activeTab !== '') {
          const tab = tabs[activeTab]
          const url = getUrl(tab.label)

          handlerTab(url)
        }
      },
      9: () => {
        resetActive()
      },
      27: () => {
        resetActive()
        dispatch(selecteItem({}))
      },
    }

    obj[key]?.()
  }

  return (
    <header className='header'>
      <h1 className='title'>Please select one font</h1>

      <ul className='tabs'>
        {tabs.map((i, index) => (
          <Tab
            key={i.label}
            isActive={index === activeTab}
            handlerTab={handlerTab}
            {...i}
          />
        ))}
      </ul>
    </header>
  )
}

export default memo(Header)

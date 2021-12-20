import React, { memo } from 'react'
import { NotificationContainer } from 'react-notifications'
import { Header } from 'components'
import './index.scss'

const Layout = ({ children }) => (
  <div className='layout'>
    <Header />

    <div className='body'>
      {children}
    </div>

    <NotificationContainer />
  </div>
)

export default memo(Layout)

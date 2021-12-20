import React, { memo } from 'react'
import c from 'classnames'
import './index.scss'

const Font = ({ abbr, label, color, isActive, activeIndex, onClick, ...props }) => {
  const handlerEnter = e => {
    if (e.which === 13) onClick()
  }

  return (
    <div className={c('font', { activeFont: isActive, selectedFont: activeIndex })} onClick={onClick} tabIndex='0' onKeyPress={handlerEnter}>
      <div className='wrapperSquare'>
        <div className='square' style={{ backgroundColor: color }}>
          <p className='text'>{abbr}</p>
          <p className='blindText'>{props['color-blind-label']}</p>
        </div>
      </div>
      <p className='label'>{label}</p>
    </div>
  )
}

export default memo(Font)

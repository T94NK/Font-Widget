import React, { useEffect, memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMyFonts, selecteItem, selecteFont } from 'modules/session/actions'
import { Font, Spin } from 'components'
import { handlerMinus, handlerPlus } from 'utils'
import './index.scss'

const MyFonts = () => {
  const [loading, setLoading] = useState(true)
  const { fonts, selectedItem, activeFont } = useSelector(({ session }) => session)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!fonts.length) {
      dispatch(getMyFonts()).then(() => setLoading(false))
    }
  }, [dispatch, fonts])

  useEffect(() => {
    if (fonts.length) {
      window.addEventListener('keydown', handleUserKeyPress)
    }
    return () => {
      if (fonts.length) {
        window.removeEventListener('keydown', handleUserKeyPress)
      }
    }
  }, [fonts, activeFont])

  const handleUserKeyPress = event => {
    const key = event.keyCode

    const obj = {
      38: () => {
        const num = handlerMinus(activeFont, fonts)
        dispatch(selecteFont(num))
      },
      40: () => {
        const num = handlerPlus(activeFont, fonts)
        dispatch(selecteFont(num))
      },
      13: () => {
        if (activeFont !== '') onClick(fonts[activeFont])
      },
    }

    obj[key]?.()
  }

  const onClick = item => {
    if (item.id !== selectedItem.id) dispatch(selecteItem(item))
  }

  return fonts.length ? (
    <section className='myFonts'>
      {fonts.map((i, index) => (
        <Font
          key={i.id}
          onClick={() => onClick(i)}
          isActive={i.id === selectedItem.id}
          activeIndex={index === activeFont}
          {...i}
        />
      ))}
    </section>
  ) : (
    <Spin loading={loading} />
  )
}

export default memo(MyFonts)

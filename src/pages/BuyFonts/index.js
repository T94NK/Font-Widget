import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBuyFonts } from 'modules/session/actions'
import { Spin } from 'components'
import './index.scss'

const BuyFonts = () => {
  const [loading, setLoading] = useState(true)
  const { content } = useSelector(({ session }) => session)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!content) {
      dispatch(getBuyFonts()).then(() => setLoading(false))
    }
  }, [dispatch, content])

  return content ? (
    <section className='wrapperBuyFonts'>
      {content}
    </section>
  ) : (
    <Spin loading={loading} />
  )
}

export default BuyFonts

import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import './index.scss'

const Spin = ({ loading }) => (
  <div className='wrapperSpin'>
    {loading ? <ClipLoader color='#FD652B' loading /> : 'No Data'}
  </div>
)

export default Spin

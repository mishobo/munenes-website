import React from 'react'
import Logo from '../images/White_on_Black_logo.png'
import Logo1 from '../images/White_on_Transparent.png'

export default function logo() {
  return (
    <div className='content'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo1} width='500px' alt='munene advocate logo' />
        </div>
      </div>
    </div>
  )
}

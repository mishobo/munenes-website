import React from 'react'
import Logo from '../images/White_on_Transparent.png'

export default function logo() {
  return (
    <div className='content'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} width='500px' alt='munene advocate logo' />
        </div>
      </div>
      <div className='footer'> 
        <pre>
        Munene Micheni<br/>
        LLB(Hons) UoN, Dip. Law (KSL)<br/>
        Managing Partner<br/>
        munene@munenemicheniadvocates.com<br/>
        +254733529467, +254757336629<br/>
        Kose Heights, 5th Floor, Hurlingham<br/>
        P.O. Box 17164 - 00100, Nairobi, Kenya
        </pre>
      </div>
    </div>
  )
}

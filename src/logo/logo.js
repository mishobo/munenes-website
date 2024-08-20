import React from 'react'
import Logo from '../images/White_on_Transparent.png'

export default function logo() {
  return (
    <div className='container'>
            <div className='content'>
        <div className='logo'>
          <img src={Logo}  alt='munene advocate logo' />
        </div>
      </div>
      <div>
        <h1>Precision, Integrity, Client Focus</h1>
      </div>
      <div className='footer'> 
        <pre>
           Kose Heights, 5th Floor, Hurlingham<br/>
          +254733529467, +254757336629<br/>
          <a href='mailto:munene@munenemicheniadvocates.com'>munene@munenemicheniadvocates.com</a><br/>
        </pre>
      </div>
    </div>
  )
}

import React from 'react'
import Logo from '../images/White_on_Transparent.png'
// import Logo1 from '../images/logo1.png'

export default function logo() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='logo'>
          <img src={Logo}  alt='munene advocate logo' />
        </div>
      </div>
      <div className='midsection'>
        <div>
         <h1 className='moto'>Precision, Integrity, Client Focus</h1>
        </div>        
      </div>
      <div className='footer'> 
        <pre>
           Kose Heights, 5<sup>th</sup> Floor, Hurlingham<br/>
          <a href='tel:+254 733 529 467'>+254 733 529 467</a>, <a href='tel:+254 757 336 629'>+254 757 336 629</a><br/>
          <a href='mailto:munene@munenemicheniadvocates.com'>munene@munenemicheniadvocates.com</a><br/>
        </pre>
      </div>
    </div>
  )
}

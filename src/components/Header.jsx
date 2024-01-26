import React from 'react'
import logo from '../assets/logo.png'

function Header({Mode, setMode}) {
  const chMode=()=>{ 
    if(Mode==="light"){
      setMode("dark")
      document.body.classList.add('dark')
    } else {
      setMode("light") 
      document.body.classList.remove('dark')
    } 
  }
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo ptr' /> 
      <div className="center"><h2><i>txt</i> FORMATTER</h2></div>
      <h4 className='center ptr' onClick={chMode}>{Mode==="light"?"Dark":"Light"}</h4>
    </div>
  )
}

export default Header

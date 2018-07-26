import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'><p>You don't remember JavaScript</p></Link>
      <Link to='/notes'><p>Notes</p></Link>
    </nav>
  )
}

export default Header
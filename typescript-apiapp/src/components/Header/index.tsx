import React from 'react'
import "./index.css"

interface IHeaderProps{
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className='navbar'>
      <h1>React TypeScript Tutorial</h1>
    </div>
  )
}

export default Header;
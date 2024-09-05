import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className='left'>
        <div className='title'>
          <h2>Shooping Mall</h2>
        </div>
      </div>
      <div className='center'>
        <ul>
          <li>Woment</li>
          <li>Men</li>
          <li>Childeren</li>
          <li>Buaty</li>
        </ul>
      </div>
      <div className='search'>
        <input type="text"  placeholder='Search...'/>
      </div>
      <div className='right'>
        <div className='signIn'>
          SignIn/Sign Up
        </div>
        <div className='cart'>
          Cart
        </div>
      </div>

    </div>
  )
}

export default Header
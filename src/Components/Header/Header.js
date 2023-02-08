import React from 'react'
import styles from './styles.module.css'
import logo from '../../img/logo.png'

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.input}>
        <input type="text" className="form-control" placeholder="Photos, people or groups" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className={styles.buttons}>
        <a href='' className='text-decoration-none fs-6 text-light'>Log In</a>
        <button type='button' className='btn btn-light me-5 fs-6'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header


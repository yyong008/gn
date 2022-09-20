import React from 'react'

// styles
import styles from './index.module.css'

const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.left}>
        <img className={styles.logo} src='/images/gn.png' alt='' />
        <span className={styles.txtLogo}>Command Gn</span>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}

export default Header

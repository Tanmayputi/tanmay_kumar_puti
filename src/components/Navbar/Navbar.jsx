import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';




const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Tanmay</a>
        <div className={styles.menu}>
        <ul className={styles.menuItems}>
            <li>
                <a href="#About">About</a>
            </li>
            <li>
                <a href="#Experience">Experience</a>
            </li>
            <li>
                <a href="#Projects">Projects</a>
            </li>
            <li>
                <a href="#Contacts">Contacts</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar

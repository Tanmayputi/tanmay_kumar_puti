import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';




const Navbar = () => {
    const[menuOpen,setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Tanmay</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIocon.png"): getImageUrl("nav/menuIcon.png")} alt='menu-button' onClick={() => setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}` }onClick={() => setMenuOpen(false)}>
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

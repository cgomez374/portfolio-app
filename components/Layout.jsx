import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

function Layout() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>
                        <a>home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/experience'>
                        <a>experience</a>
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        <a>projects</a>
                    </Link>
                </li>
                <li>
                    <Link href='contact'>
                        <a>contact me</a>
                    </Link>
                </li>
            </ul>
        </nav>
        
    )
}

export default Layout

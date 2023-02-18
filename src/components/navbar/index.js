import React, { useState } from 'react'
import styles from './navbar.module.css'

export default function Navbar({ search }) {
    const [searchTerm, setSearchTerm] = useState({
        search: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        search(searchTerm)
    }

  return (
    <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
            <h1>News Junky</h1>
        </div>
        <div className={styles.listContainer}>
            <ul>
                <li>Home</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className={styles.searchContainer}>
            <form onSubmit={handleSubmit}>
                <input required value={searchTerm.search} onChange={(e) => setSearchTerm({...searchTerm, [e.target.name]: e.target.value})} name='search' type='text' placeholder='Enter your search'/>
                <button>Search</button>
            </form>
        </div>
    </div>
  )
}

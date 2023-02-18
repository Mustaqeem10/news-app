import React from 'react'
import styles from './cards.module.css'

export default function Cards({ data }) {
 
    return (
        <div className={styles.cardContainer}>
            <img src={data.urlToImage} alt='thumbnail' />
            <h2 onClick={(event) => (event.target.classList.toggle(`${styles.full}`))} className={styles.full}>{data.title}</h2>
            <p onClick={(event) => (event.target.classList.toggle(`${styles.fullp}`))} className={styles.fullp}>
                {data.description}
            </p>
            <a href={data.url}><button>Read More...</button></a>
        </div>
      
    )
}

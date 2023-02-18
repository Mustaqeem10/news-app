import React, { useEffect, useState } from 'react'
import Cards from '../cards'
import styles from './news.module.css'

export default function NewsData({ search }) {
  const API_KEY = 'c57c4fba41484bb0967339fb5f912279'
  const [news, setNews] = useState([])

  useEffect(() => {
    const getNews = async() => {
      try {
        if (search !== ''){
          const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
          const data = await response.json()
          setNews(data.articles)
        }
        else {
          const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`)
          const data = await response.json()
          setNews(data.articles)
        }
      }
      catch(err) {
        console.log(err)
      }
    }
    getNews()
  }, [search])
  return (
    <div className={styles.cardsContainer}>
      {news && news.map((element) => <Cards key={element.title} data = {element}/>)}
    </div>
  )
}

import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import NewsData from '../../components/news-data'

export default function Home() {
    const [search, setSearch] = useState('')

    const handleSearch = (term) => {
        setSearch(term.search)
    }
  return (
    <div>
        <Navbar search={handleSearch}/>
        <NewsData search={search}/>
    </div>
  )
}

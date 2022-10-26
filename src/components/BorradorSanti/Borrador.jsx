import React, { useState } from 'react'
import Genre from '../Categories/Genre'
import Menu from '../Menu/Menu'
import response  from '../../utils/discoverTvResponse'

const Borrador = () => {
  const responseItems = response.results
  //chequeo todas las categorias de las pelis que tengo y me quedo con todas sin repetir
  const allGenres = ['all',...new Set(
                                        [].concat(
                                            ...responseItems.map((item)=>item.genre_ids)
                                          )
                                      )]

  const [series, setSeries] = useState(responseItems)
  const [genres, setGenres] = useState(allGenres)

  const filterItems = (genre) => {
    if (genre === 'all') {
      setSeries(response.results)
      return
    }
    const newSeries = responseItems.filter((serie)=> serie.genre_ids.includes(genre))
    setSeries(newSeries)
  }

  return (
    <>
    <Genre genres={genres} filterItems={filterItems}/>
    <div
    style={{display:'flex', gap:'20px'}}>
    <Menu series={series}/>
    </div>
    </>
  )
}

export default Borrador
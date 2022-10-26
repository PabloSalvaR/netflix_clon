import React from 'react'
import SerieCard from '../SerieCard/SerieCard'

const Menu = ({series}) => {
  return (
    <>
    {series.map((serie)=>{
        return (
            <SerieCard key={serie.id} serie={serie}/>
        )
    })}
    </>
  )
}

export default Menu
import React from 'react'
import { generateImageUrl } from '../../utils/generateImageUrl'
import listUtils from '../../utils/listUtils'
import translateGenre from '../../utils/translateGenre'

const SerieCard = ({serie}) => {
    const {name, id, genre_ids, poster_path} = serie
    const {isItemLastOne} = listUtils
  return (
    <div
    style={{
        backgroundColor:"grey",
        width:"200px"
    }}>
        <h2>{name}</h2>
        <img src={generateImageUrl(poster_path,200)} alt="" />
        <span>Genres: {genre_ids.map(
            (item,index,list) => !isItemLastOne(item,list)  ? `${translateGenre(item)}-`: translateGenre(item))
            }
        </span>
    </div>
  )
}

export default SerieCard
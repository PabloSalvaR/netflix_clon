import React from 'react'
import translateGenre from '../../utils/translateGenre'

const Genre = ({ genres, filterItems }) => {

    return (
        <>
            <div className='btn-container'>
                <h4>Choose Genre</h4>
                {genres.map((genre => {
                    return (
                        <button className='filter-btn' onClick={() =>
                            filterItems(genre)}>
                            {genre !== 'all' ? translateGenre(genre) : genre}
                        </button>
                    )
                }))}

            </div>
        </>
    )
}

export default Genre
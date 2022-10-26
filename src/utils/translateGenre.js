import genresDefinition from "../constants/genresDefinitions";

const translateGenre = (id) => {
    const genre = genresDefinition.find((element)=> element.id === id && element.name)
    return genre.name
}

export default translateGenre
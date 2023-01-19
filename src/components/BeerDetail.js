import BeerContainer from "../containers/BeerContainer"

const BeerDetail = ({beerAsAProp}) => {
    // const handleClick = () => {
    //     addBeerToFavourites(beerAsAProp)
    // }

    return (
        <>
        <p>Name: {beerAsAProp.name} Tagline: {beerAsAProp.tagline}</p>
        <button onClick={addBeerToFavourites}>Add to Favourites</button>
        </>
    )
}

export default BeerDetail
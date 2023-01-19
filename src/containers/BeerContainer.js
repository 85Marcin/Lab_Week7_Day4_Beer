import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';


const BeerContainer = () => {

    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)

    useEffect(() => {
        getBeers()
    }, [] )

    const getBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => {
            // we want to add the attrib of "isFavorite" to every beer, with the defgault being false 
            const modifedData = beers.map((beer) => {
                beer.isFavorite = false
                return beer 
            })
            // we then want to take that modifed data and pass it to `setBeers` 
            setBeers(modifedData)
        })
    }

   const onBeerClicked = (beerAsAProp) => {
        setSelectedBeer(beerAsAProp)
   }

   const addBeerToFavourites = (beerToAddToFavorite) => {
        const indexToUpdate = beers.findIndex((beer) => beer.id === beerToAddToFavorite.id)

        const copyOfBeerToBeFavorited = {...beerToAddToFavorite}
        copyOfBeerToBeFavorited.isFavorite = true 
        
        const copyOfBeers = [...beers] 
        copyOfBeers[indexToUpdate] = copyOfBeerToBeFavorited
        
        setBeers(copyOfBeers)

   }


    return (
        <>
            <BeerList beersAsAProp={beers}
            setSelectedBeerAsAProp={onBeerClicked}
            />
            {selectedBeer && <BeerDetail beerAsAProp={selectedBeer} addBeerToFavourites={addBeerToFavourites}/>}
        </>
    )

}


export default BeerContainer
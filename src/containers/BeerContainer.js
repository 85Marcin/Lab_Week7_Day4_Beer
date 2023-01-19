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
        .then(beers => setBeers(beers))
    }

    console.log(beers)

    return (
        <BeerList beersAsAProp={beers}/>
    )

}


export default BeerContainer
import React from 'react';
import BeerItem from './BeerItem';


const BeerList = ({beersAsAProp, setSelectedBeerAsAProp}) => {

    const beerItems = beersAsAProp.map((beer, index) => {
        return <BeerItem beerAsAProp={beer} 
        key={index} 
        setSelectedBeerAsAProp={setSelectedBeerAsAProp}/>
    })

    return (
        <>
        <ul>
            {beerItems}
        </ul>
        </>
    )

}


export default BeerList
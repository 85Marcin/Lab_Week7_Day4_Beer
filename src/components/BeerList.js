import React from 'react';
import BeerItem from './BeerItem';


const BeerList = ({beersAsAProp}) => {

    const beerItems = beersAsAProp.map((beer, index) => {
        return <BeerItem beerAsAProp={beer} key={index}/>
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
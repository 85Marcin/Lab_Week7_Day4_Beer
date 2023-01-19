import React from 'react';


const BeerItem = ({beerAsAProp, setSelectedBeerAsAProp}) => {
    const handleClick = () => {
        setSelectedBeerAsAProp(beerAsAProp)
    }

    return (
        <li onClick={handleClick}>
            {beerAsAProp.name}
        </li>
    )

}


export default BeerItem
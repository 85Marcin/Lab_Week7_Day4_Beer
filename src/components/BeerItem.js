import React from 'react';


const BeerItem = ({beerAsAProp}) => {

    return (
        <li>
            {beerAsAProp.name}
        </li>
    )

}


export default BeerItem
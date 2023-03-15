import React from 'react';

const Country = ({country}) => {
    const {name,population,area,flags,region,capital}=country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <p>Population: {population}</p>
            <p>Capitals: {capital}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <img src={flags.png} alt=''/>
        </div>
    );
};

export default Country;
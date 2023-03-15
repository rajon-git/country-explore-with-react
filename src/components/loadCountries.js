import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from './Country';

const LoadCountries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        loadCountries()
    },[]);
    const loadCountries= async()=>{
        const {data}= await axios.get('https://restcountries.com/v3.1/all');
        setCountries(data) //connect with state
    }
    return (
        <div className='countries-container'>
            {
                countries.map(country=><Country key={country.ccn3} country={country}></Country>)
            }
            {
                countries.map(country=>console.log(country))
            }
        </div>
    );
};

export default LoadCountries;
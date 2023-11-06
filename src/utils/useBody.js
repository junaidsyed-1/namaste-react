import { useState, useEffect } from 'react';
import { REST_CARD_URL } from '../utils/constant'


const useBody = (onFilter) => {
    const [filteredRestaurant, setFilteredRestaurant] = useState(null);
    const [listOfRestaurants, setListOfRestaurants] = useState(null);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(REST_CARD_URL)
        const json = await data.json()

        const structuredData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurants(structuredData)
        setFilteredRestaurant(structuredData)

    }

    useEffect(() => {
        if (listOfRestaurants && onFilter) {
            const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(onFilter.toLowerCase())
            );
            setFilteredRestaurant(filteredRes);
        }
    }, [listOfRestaurants, onFilter]);

    return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant };
};

export default useBody;
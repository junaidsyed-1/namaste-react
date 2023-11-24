import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (restId) => {
    const [resInfo, setResInfo] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_URL + restId);
            const json = await data.json();
            setResInfo(json?.data);

        } catch (error) {
            console.log(error);
        }
    }

    return resInfo;
};

export default useRestaurantMenu;
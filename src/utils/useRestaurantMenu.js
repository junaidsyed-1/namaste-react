import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (restId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + restId);
        const json = await data.json();
        setResInfo(json?.data);
        console.log(json)
    }

    return resInfo;
};

export default useRestaurantMenu;
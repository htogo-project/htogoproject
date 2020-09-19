import React from 'react';

import list from "../Humboldttogo.json";

const initialStates = {
    city: "Humboldt",
    businessType: "businesses",
    displayedPlaces: list
}

//   const setList = (city, key, type, delivery) => {
//     const filterCity = city !== "Humboldt" ? list.filter(el => el.City === city) : list;
//     const filtered = delivery ? filterCity.filter(el => el.Info.includes("Delivery")) : filterCity;
//     const filterKey = key.length > 0 ? filtered.filter(el => el.Keywords.toLowerCase().includes(key)) : filtered;
//     const filterType = type !== "businesses" ? filterKey.filter(el => el.Business === type) : filterKey;

//     return filterType;
// }


// const ListContext 
export const ListContext = React.createContext(initialStates);
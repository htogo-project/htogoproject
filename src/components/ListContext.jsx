import React from 'react';

import list from "../Humboldttogo.json";

const initialStates = {
    city: "Humboldt",
    businessType: "businesses",
    displayedPlaces: list,
    ready: false
}

export const ListContext = React.createContext(initialStates);
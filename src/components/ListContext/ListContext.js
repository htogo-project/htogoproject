import { createContext } from "react"

import list from "../../Humboldttogo.json"

export const initialStates = {
  city: "Humboldt",
  businessType: "businesses",
  displayedPlaces: list,
  ready: false,
}

export const ListContext = createContext(initialStates)

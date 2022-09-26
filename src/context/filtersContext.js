import { createContext } from "react";

const filtersContext = createContext();

const FiltersProvider = ({children}) => {


    const data = {

    }

    return (
        <filtersContext.Provider value={data}>{children}</filtersContext.Provider>
    )
}

export { FiltersProvider }
export default filtersContext
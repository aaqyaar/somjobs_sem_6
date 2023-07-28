import { useReducer, useContext, createContext } from "react";
import data from "../data/jobs.json";

const AppContext = createContext();

const initialState = {
  jobs: data,
  filteredJobs: data,
};

// this reducer have 2 actions FILTER BY SEARCH and FILTER BY LOCATION
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTERS":
      // eslint-disable-next-line no-case-declarations
      const { search, isLocation } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const filteredJobs = isLocation
        ? filterArrayByLocation(state.jobs, search)
        : filterArray(state.jobs, search);
      return {
        ...state,
        filteredJobs,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        jobs: data,
        filteredJobs: data,
      };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterBySearch = (search) => {
    dispatch({
      type: "SET_FILTERS",
      payload: {
        search,
        isLocation: false,
      },
    });
  };

  const filterByLocation = (location) => {
    console.log(location);
    dispatch({
      type: "SET_FILTERS",
      payload: {
        search: location,
        isLocation: true,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{ ...state, dispatch, filterBySearch, filterByLocation }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

function filterArray(arr, query) {
  return arr.filter((el) => {
    return (
      el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      el.description.toString().toLowerCase().indexOf(query.toLowerCase()) !==
        -1 ||
      el.city.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      el.companyName.toString().toLowerCase().indexOf(query.toLowerCase()) !==
        -1
    );
  });
}

function filterArrayByLocation(arr, query) {
  const array = arr.filter((el) => {
    return el.city.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  return array;
}

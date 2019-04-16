import React, { Component, useState } from "react";


export const SearchContext = React.createContext({
  search: ""
});

export const SearchContextProvider = (props: any) => {
  const [search, setSearch] = useState("");
  const [heroes, setHero] = useState(false);

  const updateSearch = (e: any) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const toggleHero = () => {
    setHero(!heroes);
  };

  return (
    <SearchContext.Provider
      value={{
        update: updateSearch,
        search,
        heroes,
        toggleHero
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export const SearchContextConsumer = (props: any) => {
  return <SearchContext.Consumer>{props.children}</SearchContext.Consumer>;
};

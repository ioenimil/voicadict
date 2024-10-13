import React, { useState } from "react";
import Turnstone from "turnstone";
import SplitMatch from "split-match";
import RecentSearchesPlugin from "turnstone-recent-searches";
import Icon from "./search-bar-icon";
import {
  getDictionaryApiData,
  getTopDictionarySuggestions,
} from "@/lib/api-helper";
import { useSearchStore } from "@/store/search-store";

interface ListItem {
  value: {
    name: string;
  };
  text: string;
  groupIndex: number;
  groupId: string;
  groupName: string;
  searchType: "contains" | "startswith";
  displayField: string;
  defaultListbox: boolean;
}

// Tailwind classes for Turnstone elements
const styles = {
  input:
    "w-full h-12 border bg-background text-foreground border-crystal-400 py-2 pl-10 pr-9 text-xl text-oldsilver-800 outline-none rounded-md",
  inputFocus:
    "w-full h-12 border-x-0 border-t-0 border-b border-primary py-2 pl-10 pr-9 text-xl text-foreground/70 outline-none sm:rounded-md sm:border",
  query: "text-oldsilver-800 placeholder-foreground/70",
  typeahead: "text-oldsilver-400 border-white",
  cancelButton: `absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 text-crystal-600 inline-flex sm:hidden`,
  clearButton:
    "absolute inset-y-0 right-0 w-10 inline-flex items-center justify-center text-crystal-500 hover:text-primary",
  listbox:
    "w-full bg-background text-foreground sm:border sm:border-crystal-500 sm:rounded-md text-left sm:mt-2 p-2 sm:drop-shadow-xl",
  groupHeading:
    "cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-500",
    item: "cursor-pointer p-2 text-lg whitespace-nowrap hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out rounded-md text-ellipsis overflow-hidden text-foreground",
  highlightedItem:
    "cursor-pointer p-1.5 text-lg whitespace-nowrap sm:text-ellipsis overflow-hidden text-oldsilver-700 rounded-md bg-gradient-to-t from-crystal-100 to-white",
  noItems: "cursor-default text-center my-20",
};

// The maximum number of items we want to show in the list
const maxItems = 5;

// Set up listbox contents. We are fetching cities and airports from two different
// API endpoints. 10 from each but ideally we only want to show 8 cities and 2 airports.
const listbox = [
  {
    id: "suggestions",
    name: "Suggestions",
    ratio: 5,
    displayField: "word",
    data: (query: string) => {
      const data = getTopDictionarySuggestions(query);
      return data;
    },
    searchType: "contains",
  },
];

// Custom Item component
const Item = (props: any) => {
  const {
    appearsInDefaultListbox,
    index,
    item,
    query,
    searchType = "startswith",
    setSelected,
    totalItems,
  } = props;

  const globalMatch = searchType === "contains";
  const iconType = item.icon || item.type;
  const SplitComponent = (props: any) => {
    const { children, index: splitIndex } = props;
    const doubleLine = index === 0 && !appearsInDefaultListbox;
    const fontWeight = appearsInDefaultListbox
      ? "font-light"
      : totalItems === 1
        ? "font-semibold"
        : searchType === "startswith"
          ? "font-semibold"
          : "font-light";
    const display = doubleLine ? "block" : "inline";
    const lineHeight = doubleLine ? "leading-6" : "";
    const textSize = doubleLine
      ? splitIndex === 1
        ? "text-base"
        : "text-xl"
      : splitIndex === 1
        ? "text-sm"
        : "text-lg";
    const className = `${display} ${fontWeight} ${textSize} ${lineHeight}`;
    return <span className={className}>{children}</span>;
  };

  const MatchComponent = (props: any) => {
    const { children } = props;
    const className = appearsInDefaultListbox
      ? "font-light"
      : totalItems === 1
        ? "font-semibold"
        : searchType === "startswith"
          ? "font-light"
          : "font-semibold";
    return <span className={className}>{children}</span>;
  };

  const matchedText = (includeSeparator: any) => {
    return (
      <SplitMatch
        searchText={query}
        globalMatch={globalMatch}
        globalSplit={false}
        includeSeparator={includeSeparator}
        MatchComponent={MatchComponent}
        SplitComponent={SplitComponent}
      >
        {item.name}
      </SplitMatch>
    );
  };

  const firstItem = () => {
    return (
      <>
        <div className="text-cerulean-600 mr-2.5 inline-block w-10 text-center align-middle">
          <Icon type={iconType} className="h-7 w-10 text-primary" />
        </div>
        <div className="text-oldsilver-600 inline-block">
          {matchedText(false)}
        </div>
      </>
    );
  };

  const standardItem = () => {
    return (
      <>
        <div className="text-cerulean-600 mr-2.5 inline-block w-10 text-center align-middle">
          <Icon type={iconType} className="h-7 w-10" />
        </div>
        <span className="text-oldsilver-600 align-middle">
          {matchedText(true)}
        </span>
      </>
    );
  };

  return index === 0 && !appearsInDefaultListbox ? firstItem() : standardItem();
};

const Cancel = () => <Icon type="cancel" className="h-8 w-8" />;
const Clear = () => <Icon type="clear" className="h-6 w-6" />;

export default function SearchBar() {
  const [hasFocus, setHasFocus] = useState(false);
  const { setSearchQuery, setSearchResults } = useSearchStore();

  const handleOnEnter = async (
    enteredQuery: string,
    selectedItem: ListItem,
  ) => {
   
    //set the entered query to the search store
    setSearchQuery(enteredQuery);
    // You can perform other actions here, like fetching data based on the query or the selected item
    try {
      const dataResult = await getDictionaryApiData(enteredQuery);
      setSearchResults(dataResult);
    } catch (error) {
      console.error("Error fetching data", error);
    }

    //set the entered query to the search store

    // You can perform other actions here, like fetching data based on the query or the selected item
  };

  // Style the container so on mobile devices the search box and results
  // take up the whole screen
  const containerStyles = hasFocus
    ? "fixed block bg:background w-full h-full top-0 left-0 bg-white z-50 overflow-auto sm:relative sm:h-auto sm:top-auto sm:left-auto sm:bg-transparent sm:z-auto sm:overflow-visible"
    : "relative bg:background  ";

  const iconDisplayStyle = hasFocus
    ? "hidden text-crystal-600"
    : "inline-flex text-crystal-500";

  const onBlur = () => setHasFocus(false);
  const onFocus = () => setHasFocus(true);

  return (
    <div className={containerStyles}>
      <span
        className={`absolute inset-y-0 left-0 z-10 h-12 w-10 items-center justify-center sm:inline-flex ${iconDisplayStyle}`}
      >
        <Icon type="search" className="h-6 w-6" />
      </span>
      <Turnstone
        cancelButton={true}
        clearButton={true}
        debounceWait={250}
        id="autocomplete"
        listbox={listbox}
        listboxIsImmutable={true}
        matchText={true}
        maxItems={maxItems}
        noItemsMessage="We found no words that match your search"
        onBlur={onBlur}
        onEnter={handleOnEnter}
        onFocus={onFocus}
        placeholder="Search for a word"
        plugins={[[RecentSearchesPlugin, { storageKey: "turnstoneExample2" }]]}
        styles={styles}
        Cancel={Cancel}
        Clear={Clear}
        Item={Item}
      />
    </div>
  );
}

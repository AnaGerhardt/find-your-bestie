import loadCustomRoutes from "next/dist/lib/load-custom-routes";
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { useRouter } from "next/router";

import styles from "styles/components/AutoSuggest.module.scss";

export const AutoSuggest = (props) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const locations = props.data;

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : locations.filter(
          (local) =>
            local.city.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.city;
  const renderSuggestion = (suggestion) => (
    <div className={styles.list} onClick={() => router.push("/main")}>
      {suggestion.city + ", " + suggestion.country}
    </div>
  );

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Type your location",
    value,
    onChange: onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={styles}
    />
  );
};

/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.data.category}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          error={props.categoryError}
          onChange={(e) => props.onCategoryChange(e.target.value)}
          {...params}
          label="Category"
          variant="outlined"
        />
      )}
    />
  );
}

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function CategorySelect(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel size="small" id="demo-simple-select-label">
        {props.label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={props.label}
        onChange={handleChange}
        value={value}
        size="small"
      >
        <MenuItem value={10}>Stocks</MenuItem>
        <MenuItem value={20}>Real Estate</MenuItem>
        <MenuItem value={30}>Crypto</MenuItem>
        <MenuItem value={40}>Bank account</MenuItem>
        <MenuItem value={40}>
          <i>Create your own category</i>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default CategorySelect;

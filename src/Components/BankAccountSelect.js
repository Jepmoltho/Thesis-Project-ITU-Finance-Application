import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function BankAccountSelect(props) {
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
        <MenuItem value={10}>Danske Bank</MenuItem>
        <MenuItem value={20}>
          <i>Support for more banks coming soon</i>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default BankAccountSelect;

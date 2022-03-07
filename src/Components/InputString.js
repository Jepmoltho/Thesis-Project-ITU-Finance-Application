//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function InputString(props) {
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  //   useEffect(() => {
  //     if (createUser === true) {
  //       navigate("/login");
  //     }
  //   }, [createUser, navigate]);

  return (
    <div className="inputbox">
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        value={input}
        onChange={setInput}
        size="small"
        fullWidth //This makes it expand to the full width of the container
      />
    </div>
  );
}

export default InputString;

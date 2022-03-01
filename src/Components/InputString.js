//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

function InputString(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, [input]);

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
        onChange={(e) => setInput(e.target.value)}
        size="small"
      />
    </div>
  );
}

/*
      <input
        label="test"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
*/

export default InputString;

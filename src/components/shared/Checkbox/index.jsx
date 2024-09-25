import * as React from "react";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);
  console.log("checked", checked);
  const handleChange2 = (event) => {
    setChecked(event.target.checked);
  };
  return (
    // <FormControlLabel
    //   label="Remember me"
    //   control={
    //     <Checkbox
    //       checked={checked}
    //       onChange={handleChange2}
    //       sx={{
    //         width: "18px",
    //         height: "18px",
    //         "&.Mui-checked": {
    //           color: "primary.main",
    //         },
    //         "& .MuiSvgIcon-root": {
    //           borderRadius: "10px",
    //         },
    //       }}
    //     />
    //   }
    // />
    <></>
  );
};

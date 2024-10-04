import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const CustomCheckbox = ({ checked, setChecked, label }) => {
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      sx={{
        '& .MuiFormControlLabel-label': {
          color: 'gray',
          paddingTop: '2.5px',
        },
        '& .MuiSvgIcon-root': {
          color: 'gray',
        },
      }}
      label={label}
    />
  );
};

import React from 'react';
import { TextField, FormControl, Box, Typography } from '@mui/material';

export const TextInput = ({
  name,
  value,
  onChange,
  disabled,
  id,
  type,
  size = 'small',
  label,
  placeholder,
  error,
  autoComplete,
}) => {
  return (
    <Box>
      {/* Label */}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        gap={2}
      >
        <Typography
          htmlFor={id}
          fontSize={'12px'}
          color={error ? 'primary.danger' : 'primary.gray'}
          textTransform={'capitalize'}
          alignSelf={'end'}
        >
          {label}
        </Typography>
        {type === 'password' ? (
          <Typography
            fontSize={'12px'}
            color='primary.main'
            textAlign={'right'}
            onClick={() => console.log('Forgot Password')}
          >
            Forgot Password?
          </Typography>
        ) : (
          <Typography
            fontSize={'12px'}
            color='primary.danger'
            textAlign={'right'}
          >
            {error}
          </Typography>
        )}
      </Box>

      {/* Input Field */}
      <TextField
        id={id}
        size={size}
        type={type || 'text'}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'password' : ''}
        name={name}
        value={value}
        onChange={disabled ? onChange : null}
        disabled={disabled}
        sx={{
          width: '100%',
          '& label.Mui-focused': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: error ? 'primary.danger' : 'primary.lightGray',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1px',
              borderColor: 'black',
            },
          },
        }}
      />
      {type === 'password' ? (
        <Typography
          fontSize={'12px'}
          color='primary.danger'
        >
          {error}
        </Typography>
      ) : null}
    </Box >
  )
};
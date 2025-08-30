import { Stack, TextField, Typography, Box, Button, Container, InputLabel, OutlinedInput, InputAdornment, IconButton, FormControl } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";


//import { ToastContainer, toast } from 'react-toastify';

import { Visibility, VisibilityOff } from "@mui/icons-material";



export default function ForgotPassword() {
  const [forgetEl, setForgetEl] = useState('');
  const [value, setValue] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  }

  const handleSubmited = async (e) => {
    e.preventDefault();

  }

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }


  return (
    <Stack>
      <Container component="main" maxWidth="xs" >

        {
          value ?
            (
            <Box component='form' onSubmit={handleSubmited} sx={{ mt: 16 }}>

              <TextField
                margin="normal"
                fullWidth
                value={forgetEl}
              />

              <FormControl sx={{ m: 1, ml: 0, mr: 0 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility color="info" /> : <VisibilityOff color='warning' />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {/* <TextField
                      fullWidth
                    sx={{mt:4}}
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                    /> */}
              <Button variant="contained" type="submit" fullWidth sx={{ mt: 4 }} >Set Password</Button>
            </Box>)
            : (
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 16 }} >
                <Typography variant="h3" textAlign={"center"}>Forget</Typography>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Forget"
                  type="email"
                  value={forgetEl}
                  onChange={(event) => setForgetEl(event.target.value)}
                />


                <Button variant="contained" type="submit" fullWidth className="button" sx={{ mt: 3, mb: 2 }}>Forget</Button>
              </Box>)
        }

        <Link to={"/login"} >LOGIN</Link>
      </Container>
    </Stack>
  )
}
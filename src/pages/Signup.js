import React ,{useState}from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import {Link,useNavigate } from 'react-router-dom';
import { userSignup } from '../api/Api';
import './Login.css'; 
import './Signup.css'; 

const Login = () => {
const[ name,setName]=useState({
    username: '',
    email: '',
    password: ''
})
const navigate = useNavigate();

const signUpSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await userSignup(name);
        // if(response.status===404){
        //     alert("User already exists");
        // }
        // else{
        //     console.log("Signup successful:", response.data);
        // }
        console.log("Signup successful:", response.data);
        setName({
            username: '',
            email: '',
            password: ''
        })

    } catch (error) {
        console.error("Signup error:", error);
    }

  };
  return (
    <Box 
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      height: '100vh',
      width: '100%',
    }}
    className="signup-container">
    
    <Box className="login-form partial-bg-signup" >
      <Typography variant="h4" align="center" sx={{ color: 'white', mt: 2 }}>
        Welcome Back!
      </Typography>
      <Typography variant="body1" align="center" sx={{ color: 'white', mt: 1 }}>
        You have an account?
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
          Please click the <span className='span-text'>login</span>
        </Link>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p:2,
      }}
      className="login-form container"
    >
        <Typography variant="h5" align="center" gutterBottom color='#ffffff'>
          Signup
        </Typography>
        <Box component="form" onSubmit={signUpSubmit} autoComplete="off">
            <TextField
            label='username'
            variant="outlined"
            fullWidth
            required
            value={name.username}
            onChange={(e) => setName({...name, username: e.target.value})}
            margin="normal"
            />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={name.email}
            onChange={(e) => setName({...name, email: e.target.value})}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={name.password}
            onChange={(e) => setName({...name, password: e.target.value})}
          />
          <Button 
          fullWidth
          variant="contained"
          color="primary"
          disableRipple
          type='submit'
          >Signup</Button>
        </Box>
    </Box>
    </Box>
  );
};

export default Login;

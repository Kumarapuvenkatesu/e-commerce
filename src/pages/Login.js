import React ,{useState}from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
import { userLogin } from '../api/Api';
import './Login.css'; 

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userLogin({ email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      if (response.data.role === "admin") {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error);
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
    className="login-container">
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} autoComplete="off">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
          fullWidth
          variant="contained"
          color="primary"
          disableRipple
          type='submit'
          >Login</Button>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Link to="/forget-password" style={{ color:"#ffffff", textDecoration: 'none' }}>
            Forgot Password?
          </Link>
          </Box>
    </Box>
    <Box className="login-form partial-bg" >
      <Typography variant="h4" align="center" sx={{ color: 'white', mt: 2 }}>
        Welcome Back!
      </Typography>
      <Typography variant="body1" align="center" sx={{ color: 'white', mt: 1 }}>
        Please login to continue
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
          Don't have an account? <span className='span-text'>Sign Up</span>
        </Link>
      </Box>
    </Box>
    </Box>
  );
};

export default Login;

import React from 'react';

import {Avatar, Grid, Paper, Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';



  
const Login=()=>{
  
        const paperStyle={padding :"45px 20px",height:'auto',width:280,margin:"60px auto "}
        const avtarStyle={backgroundColor:'#222294'}
        const btStyle={backgroundColor:'#222294', margin:'10px 0'}
        const labelStyle={ margin:'10px 0'}
        const TypoStyle={ margin:'10px 0',Color:'#222294'}
        

      return (
         
        <Grid>
        
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                     <Avatar style={avtarStyle}   sx={{ width: 60, height: 60 }}><LockOutlinedIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>    

                            <TextField style={labelStyle} label='Username' placeholder='Enter Username' fullWidth required/>
                            <TextField style={labelStyle} label='Password' placeholder='Enter Password' type='password' fullWidth required />
                            <FormGroup>
                            <FormControlLabel
                            control={<Checkbox iconStyle={{fill: '#222294'}} defaultChecked />} 
                    label="Remember Me" />
                   
                 </FormGroup>

                 <Button type='submit' color='primary' variant="contained" style={btStyle} fullWidth>Sign In</Button>

                 <Typography  style={TypoStyle}>
                 <Link href="#" style={{color: '#222294'}}>Forgot Password</Link>
                </Typography>

                 
                <Typography >Do you have an account?
                 <Link href="#" style={{color: '#222294'}} >
                     Sign Up
                 </Link>
                </Typography>






                

                


        
            </Paper>
        </Grid>
      
      )
  }

export default Login;


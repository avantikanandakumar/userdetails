import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Form = ({user}) => {
    const[form,setForm]=useState({
        myName:'',
        email:'',
        password:'',
        conPass:'',
        phone:'',
        address:''
    })
    const capValue=()=>{
        // console.log(form);
        axios.post('https://dummyjson.com/users/add',form).then((res)=>{
          // console.log(res)
          alert(res.data.id)
        })
    }
  return (
    
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <h2>STUDENT REGISTRATION FORM</h2>
    <div>
        <div>
      <TextField
        required
        id="outlined-required"
        label="Name"
        defaultValue=""
        value={form.myName}
        onChange={(e)=>{
            setForm({...form,myName:e.target.value})
        }}
       
      />
      <TextField
        required
        id="outlined-disabled"
        label="E-Mail"
        type= "email"
        value={form.email}
        onChange={(e)=>{
            setForm({...form,email:e.target.value})
        }}
        
      />
      </div>
      <div>
      <TextField
       required
        id="outlined-password-input"
        label="Password"
        type="password"
         value={form.password}
        onChange={(e)=>{
            setForm({...form,password:e.target.value})
        }}
      />
      <TextField
       required
         id="outlined-password-input"
         label="Confirm Password"
         type="password"
        
         value={form.conPass}
         onChange={(e)=>{
             setForm({...form,conPass:e.target.value})
         }}
       
      />
      </div>
      <div>
      <TextField
       required
        id="outlined-number"
        label="Phone Number"
        type="number"
        value={form.phone}
        onChange={(e)=>{
            setForm({...form,phone:e.target.value})
        }}
       
      />
     
      <TextField
       required
        id="outlined-helperText"
        label="Address"
        value={form.address}
        onChange={(e)=>{
            setForm({...form,address:e.target.value})
        }}
        
       
      />
      </div>
      <Button variant="contained" onClick={capValue}>Register</Button>
    </div>
    
    
  </Box>
  )
}

export default Form
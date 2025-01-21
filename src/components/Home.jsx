import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Home = () => {
    const[name,setName]=useState('Avantika');
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);
    const changeValue=()=>{
        setName('Cristeena')
    }
    const changeCountup=()=>{
        setCount(count+1)
    }
    const changeCountdown=()=>{
        setCount(count-1)
    }
    const changeCountreset=()=>{
        setCount(0)
    }

   const [name1,setName1]=useState('')
  return (
    <>
    <h1>Welcome {name} to MERN Learning</h1>
    <Button variant="contained" onClick={changeValue}>CHANGE</Button><br /><br />
    <Button variant="contained" onClick={changeCountup}>Increment</Button>
    <Button variant="contained" onClick={changeCountdown}>Decrement</Button>
    <Button variant="contained" onClick={changeCountreset}>Reset</Button>
    <small>The button is pressed {count} times</small><br /><br />
    <TextField id="outlined-basic" label="Enter your name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
        <p>Your name is:{name}</p>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Home
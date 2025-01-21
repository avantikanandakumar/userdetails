import { Card, CardContent, Grid, Typography } from '@mui/material'
import { blue } from '@mui/material/colors';
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Register = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetch data from a dummy JSON API
        axios
            .get("https://dummyjson.com/users")
            .then((response) => {
                // Extract the users array from the response
                setEmployees(response.data.users); // Use response.data.users
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    
      
  return (
    <Grid container spacing={4} style={{ padding: "20px" }}>
    {employees.map((employee) => (
        <Grid item xs={12} sm={6} md={4} key={employee.id}>
            <Card
                style={{
                    backgroundColor:
                        employee.gender === "male" ? "blue" : "pink", // Blue for males, pink for females
                    borderRadius: "15px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <Typography variant="h5" component="div">
                        {employee.firstName} {employee.lastName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Email: {employee.email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Phone: {employee.phone}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Company: {employee.company.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Gender: {employee.gender}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ))}
</Grid>
  )
}

export default Register
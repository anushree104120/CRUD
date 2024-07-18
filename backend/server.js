const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());


//get all the users details
app.get('/api/users', (req,res)=>{
    const users = [
        {
            "id": 1,
            "name": "John Doe",
            "age": 28,
            "email": "john.doe@example.com"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "age": 34,
            "email": "jane.smith@example.com"
        },
        {
            "id": 3,
            "name": "Michael Johnson",
            "age": 45,
            "email": "michael.johnson@example.com"
        },
        {
            "id": 4,
            "name": "Emily Davis",
            "age": 22,
            "email": "emily.davis@example.com"
        },
        {
            "id": 5,
            "name": "David Brown",
            "age": 31,
            "email": "david.brown@example.com"
        }
    ]
    
    
    res.send(users);

})

app.get('/', (req,res)=>{
    res.send("Server is running");
})
const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
})

import { app } from "./index"

const PORT:number = 5000;   // for port 

app.listen(PORT, "localhost",  ()=>{
    console.log(`Server is listining on port ${PORT}`)
    
})
